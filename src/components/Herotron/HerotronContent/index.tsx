import { Flex } from "../../base";
import { flexContentStyle, flexInnerContainerStyle } from "../styles";
import styles from "../styles.module.css";
import { Fragment } from "react";
import ActionButton from "./ActionButton";
import type { WatchlistItem } from "@/context/watchlist-storage/types";
import { formatDate } from "@/utils/date";

interface ContentSectionProps {
  watchListProps: WatchlistItem;
  isSingle: boolean;
  releaseDate: string;
}

export const HerotronContent = (props: ContentSectionProps) => {
  const { watchListProps, isSingle, releaseDate } = props;

  return (
    <Flex style={flexInnerContainerStyle}>
      <Flex style={flexContentStyle}>
        <Fragment key={watchListProps.title}>
          <h2 className={styles.slideIn}>{watchListProps.title}</h2>
          <p className={`${styles.descriptionText} ${styles.slideIn}`}>
            {!isSingle
              ? watchListProps.description
              : `Released at ${formatDate(releaseDate)}`}
          </p>
        </Fragment>
        <ActionButton isSingle={isSingle} watchListProps={watchListProps} />
      </Flex>
    </Flex>
  );
};
