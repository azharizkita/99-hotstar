import { Flex } from "../../base";
import { flexContentStyle, flexInnerContainerStyle } from "../styles";
import styles from "../styles.module.css";
import { Fragment } from "react";
import ActionButton from "./ActionButton";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

interface ContentSectionProps {
  watchListProps: WatchlistItem;
}

export const HerotronContent = (props: ContentSectionProps) => {
  const { watchListProps } = props;

  return (
    <Flex style={flexInnerContainerStyle}>
      <Flex style={flexContentStyle}>
        <Fragment key={watchListProps.title}>
          <h2 className={styles.slideIn}>{watchListProps.title}</h2>
          <p className={`${styles.descriptionText} ${styles.slideIn}`}>
            {watchListProps.description}
          </p>
        </Fragment>
        <ActionButton watchListProps={watchListProps} />
      </Flex>
    </Flex>
  );
};
