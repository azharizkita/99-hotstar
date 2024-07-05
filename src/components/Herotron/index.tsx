"use client";

import { useEffect, useState } from "react";
import { Flex } from "@/components/base";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { Mergeable } from "@/utils/array";
import { ImageCarousel } from "./ImageCarousel";
import { HerotronContent } from "./HerotronContent";
import { containerStles } from "./styles";

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

  const { original_name, name, original_title, title, overview } =
    data[currentIndex];
  const itemName = original_name ?? name ?? original_title ?? title;
  const itemDescription = overview;

  return (
    <Flex style={containerStles}>
      <ImageCarousel data={data} currentIndex={currentIndex} />
      <HerotronContent itemName={itemName} itemDescription={itemDescription} />
    </Flex>
  );
};

export default Herotron;
