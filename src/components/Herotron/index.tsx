"use client";

import { useEffect, useState } from "react";
import { Flex } from "@/components/base";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { Mergeable } from "@/utils/array";
import { ImageCarousel } from "./ImageCarousel";
import { HerotronContent } from "./HerotronContent";
import { containerStles } from "./styles";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

export interface HerotronProps {
  data: Mergeable<MovieItem, TVShowItem>[];
  isSingle?: boolean;
}

const Herotron = ({ data, isSingle = false }: HerotronProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const { name, title, overview, id, poster_path, release_date } =
    data[currentIndex];
  const itemName = name || title;
  const itemDescription = overview;
  const itemType = name ? "tv" : "movie";

  const watchListProps: WatchlistItem = {
    description: itemDescription ?? "",
    title: itemName,
    imageUrl: poster_path ?? "",
    id,
    type: itemType,
  };

  return (
    <Flex style={containerStles}>
      <ImageCarousel data={data} currentIndex={currentIndex} />
      <HerotronContent
        releaseDate={release_date}
        isSingle={isSingle}
        watchListProps={watchListProps}
      />
    </Flex>
  );
};

export default Herotron;
