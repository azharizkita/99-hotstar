"use client";

import { Flex } from "@/components/base";
import Button from "@/components/base/Button";
import { buttonContainerStyle } from "../styles";
import { PlaylistAddIcon } from "@/Icons";
import { use } from "react";
import { WatchlistContext } from "@/context/watchlist-storage";
import PlaylistRemoveIcon from "@/Icons/PlaylistRemoveIcon";
import type { WatchlistItem } from "@/context/watchlist-storage/types";

export const ActionButton = (props: {
  watchListProps: WatchlistItem;
  isSingle: boolean;
}) => {
  const { watchListProps, isSingle } = props;
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
    <Flex style={buttonContainerStyle}>
      {!isSingle && (
        <Button
          variant="translucent"
          style={{ width: "100%" }}
          aria-label="More details"
        >
          More details
        </Button>
      )}
      <Button
        variant="translucent"
        style={{ width: "fit-content" }}
        aria-label="Watch list"
        onClick={handleClick}
      >
        {isExistInWatchlist ? (
          <PlaylistRemoveIcon width="1.5em" height="1.5em" />
        ) : (
          <PlaylistAddIcon width="1.5em" height="1.5em" />
        )}
        {isSingle &&
          `${isExistInWatchlist ? "Remove from" : "Add to"} watchlist`}
      </Button>
    </Flex>
  );
};

export default ActionButton;
