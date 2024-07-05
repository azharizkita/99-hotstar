import NextImage, { type ImageProps } from "next/image";
import placeholder from "./placeholder.png";
import { TMDB_IMAGE_BASE_URL } from "@/constants/tmdb";

interface ImageLoaderProps
  extends Omit<ImageProps, "alt" | "src" | "height" | "width"> {
  src?: string;
  alt?: string;
  isBackground?: boolean;
}

export default function Image(props: ImageLoaderProps) {
  const { alt = "", src: _src, isBackground, ...restProps } = props;
  const src =
    _src === "#" || !_src
      ? placeholder
      : `${TMDB_IMAGE_BASE_URL}/${isBackground ? "w1280" : "w500"}${_src}`;

  return (
    <NextImage
      fill
      priority={isBackground}
      alt={alt}
      src={src}
      placeholder="blur"
      loading={isBackground ? "eager" : "lazy"}
      blurDataURL={placeholder.blurDataURL}
      {...restProps}
    />
  );
}
