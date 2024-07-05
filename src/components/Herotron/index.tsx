"use client";

import { useEffect, useState } from "react";
import { Flex } from "@/components/base";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { Mergeable } from "@/utils/array";
import { ImageCarousel } from "./ImageCarousel";
import { HerotronContent } from "./HerotronContent";
import { containerStles } from "./styles";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

interface HerotronProps {
  data: Mergeable<MovieItem, TVShowItem>[];
}

const Herotron = ({ data }: HerotronProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const {
    original_name,
    name,
    original_title,
    title,
    overview,
    id,
    poster_path,
  } = data[currentIndex];
  const itemName = original_name ?? name ?? original_title ?? title;
  const itemDescription = overview;
  const itemType = original_name || name ? "movie" : "tv";

  const watchListProps: WatchlistItem = {
    description: itemDescription,
    title: itemName,
    imageUrl: poster_path ?? "",
    id,
    type: itemType,
  };

  return (
    <Flex style={containerStles}>
      <ImageCarousel data={data} currentIndex={currentIndex} />
      <HerotronContent watchListProps={watchListProps} />
    </Flex>
  );
};

export default Herotron;
