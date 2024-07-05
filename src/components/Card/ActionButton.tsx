"use client";

import { PlaylistAddIcon } from "@/Icons";
import Button from "../base/Button";
import styles from "./styles.module.css";
import { hoverCircleStyle } from "./styles";
import { use } from "react";
import { WatchlistContext } from "@/context/watchlist-storage";
import PlaylistRemoveIcon from "@/Icons/PlaylistRemoveIcon";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

export const ActionButton = (props: { watchListProps: WatchlistItem }) => {
  const { watchListProps } = props;
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    use(WatchlistContext);
  const isExistInWatchlist = !!watchlist[watchListProps.id];

  const handleClick = () => {
    if (!isExistInWatchlist) {
      addToWatchlist(watchListProps);
      return;
    }
    removeFromWatchlist(watchListProps.id);
  };

  return (
    <Button
      onClick={handleClick}
      className={styles.hoverCircle}
      style={hoverCircleStyle}
    >
      {isExistInWatchlist ? (
        <PlaylistRemoveIcon fill="red" />
      ) : (
        <PlaylistAddIcon fill="black" />
      )}
    </Button>
  );
};
