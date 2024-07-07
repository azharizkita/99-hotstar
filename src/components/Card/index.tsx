import Image from "../base/Image";
import { Flex } from "../base";
import styles from "./styles.module.css";
import type { HTMLAttributes } from "react";
import {
  cardStyle,
  descriptionStyles,
  descriptionTextStyles,
  titleStyles,
  episodeCardStyle,
  imageStyle,
  episodeImageStyle,
  episodeDescriptionStyles,
  episodeDurationStyle,
} from "./styles";
import { ActionButton } from "./ActionButton";
import type { WatchlistItem } from "@/context/watchlist-storage/types";
import Link from "next/link";
import { formatDate } from "@/utils/date";
import { titleEncoder } from "@/utils/encoder";

interface CardProps extends HTMLAttributes<HTMLElement> {
  imageUrl: string;
  title: string;
  description: string;
  priority?: boolean;
  itemId: number;
  type: "tv" | "movie";
  entrypoint: string;
  isEpisode?: boolean;
  releaseDate?: string;
  duration?: number;
}

const Card = (props: CardProps) => {
  const {
    imageUrl,
    priority,
    itemId: id,
    type,
    title = "-",
    description = "-",
    entrypoint,
    isEpisode = false,
    duration,
    releaseDate,
    ...rest
  } = props;

  const watchListProps: WatchlistItem = {
    description,
    id,
    imageUrl,
    title,
    type,
  };

  return (
    <Link
      style={{
        pointerEvents: isEpisode ? "none" : "auto",
        height: "fit-content",
      }}
      href={`/${type}/${id}-${titleEncoder(title)}`}
      aria-label={title}
    >
      <article
        style={{ ...cardStyle, ...(isEpisode && episodeCardStyle) }}
        className={`${styles.card} ${isEpisode ? styles.episodeCard : ""}`}
        {...rest}
      >
        <Flex
          className={isEpisode ? styles.episodeImage : ""}
          style={{
            ...(isEpisode
              ? episodeImageStyle
              : {
                  position: "absolute",
                  zIndex: 0,
                  width: "100%",
                  height: "100%",
                }),
          }}
        >
          <Image
            priority={priority}
            src={imageUrl}
            alt={title}
            style={imageStyle}
          />
        </Flex>
        <Flex
          id="description"
          className={`${styles.description} ${isEpisode ? styles.episodeDescription : ""}`}
          style={{
            ...descriptionStyles,
            ...(isEpisode && episodeDescriptionStyles),
          }}
        >
          <p style={titleStyles}>{title}</p>
          <p style={descriptionTextStyles}>{description}</p>
          {isEpisode && (
            <Flex style={episodeDurationStyle}>
              <p style={descriptionTextStyles}>
                {duration && `${duration} minutes ${releaseDate ? "| " : ""}`}
                {releaseDate && formatDate(releaseDate)}
              </p>
            </Flex>
          )}
        </Flex>
        {!isEpisode && <ActionButton watchListProps={watchListProps} />}
      </article>
    </Link>
  );
};

export default Card;
