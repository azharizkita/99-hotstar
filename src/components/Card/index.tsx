import Image from "../base/Image";
import { Flex } from "../base";
import styles from "./styles.module.css";
import type { HTMLAttributes } from "react";
import {
  cardStyle,
  descriptionStyles,
  descriptionTextStyles,
  titleStyles,
} from "./styles";
import { ActionButton } from "./ActionButton";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

interface CardProps extends HTMLAttributes<HTMLElement> {
  imageUrl: string;
  title: string;
  description: string;
  priority?: boolean;
  itemId: number;
  type: "tv" | "movie";
}

const Card = (props: CardProps) => {
  const {
    imageUrl,
    priority,
    itemId: id,
    type,
    title = "-",
    description = "-",
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
    <article style={cardStyle} className={styles.card} {...rest}>
      <Flex
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          priority={priority}
          src={imageUrl}
          alt={title}
          style={{
            objectFit: "cover",
          }}
        />
      </Flex>
      <Flex
        id="description"
        className={styles.description}
        style={descriptionStyles}
      >
        <p style={titleStyles}>{title}</p>
        <p style={descriptionTextStyles}>{description}</p>
      </Flex>
      <ActionButton watchListProps={watchListProps} />
    </article>
  );
};

export default Card;
