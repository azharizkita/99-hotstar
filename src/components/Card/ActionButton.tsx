"use client";

import { PlaylistAddIcon } from "@/Icons";
import Button from "../base/Button";
import styles from "./styles.module.css";
import { hoverCircleStyle } from "./styles";
import { use } from "react";
import { WatchlistContext } from "@/context/watchlist-storage";
import PlaylistRemoveIcon from "@/Icons/PlaylistRemoveIcon";

export const ActionButton = (props: { id: number; type: "tv" | "movie" }) => {
  const { id, type } = props;
  const { watchlist, addToWatchlist, removeFromWatchlist } =
    use(WatchlistContext);
  const isExistInWatchlist = !!watchlist[id];

  const handleClick = () => {
    if (!isExistInWatchlist) {
      addToWatchlist({ id, timestamp: Date.now(), type: type });
      return;
    }
    removeFromWatchlist(id);
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
