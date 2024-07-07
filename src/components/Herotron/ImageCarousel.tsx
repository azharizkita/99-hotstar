import type { MovieItem, TVShowItem } from "@/repositories/types";
import type { Mergeable } from "@/utils/array";
import { Flex } from "../base";
import Image from "../base/Image";
import { imageHolderStyle, linearGradientStyle } from "./styles";
import styles from "./styles.module.css";

interface ImageCarouselProps {
  data: Mergeable<MovieItem, TVShowItem>[];
  currentIndex: number;
}

export const ImageCarousel = ({ data, currentIndex }: ImageCarouselProps) => (
  <Flex id="image-holder" style={imageHolderStyle}>
    {data.map(({ backdrop_path, title, name }, i) => (
      <Image
        alt={title || name}
        isBackground
        src={backdrop_path ?? ""}
        key={i}
        sizes="100vw"
        style={{ filter: "brightness(60%)", objectFit: "cover" }}
        className={`${styles.image} ${i === currentIndex ? styles.show : ""}`}
      />
    ))}
    <div style={linearGradientStyle} />
  </Flex>
);
