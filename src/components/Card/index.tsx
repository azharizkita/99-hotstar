import { spacing } from "@/styles/utils";
import Image from "../base/Image";
import { Flex } from "../base";
import styles from "./styles.module.css";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  imageUrl: string;
  title: string;
  description: string;
  priority?: boolean;
}

const Card = (props: CardProps) => {
  const { imageUrl, priority, title = "-", description = "-", ...rest } = props;
  return (
    <article
      className={styles.card}
      style={{
        display: "flex",
        width: "154px",
        height: "231px",
        position: "relative",
        flexShrink: 0,
        borderRadius: spacing(2),
        outline: "1px solid var(--translucent-background)",
      }}
      {...rest}
    >
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
        style={{
          alignSelf: "end",
          padding: spacing(2),
          borderRadius: spacing(2),
          background: "var(--translucent-background)",
        }}
      >
        <p className={styles.title}>{title}</p>
        <p className={styles.descriptionText}>{description}</p>
      </Flex>
    </article>
  );
};

export default Card;
