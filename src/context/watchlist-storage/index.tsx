"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../utils/local-storage";
import type {
  WatchlistContextType,
  WatchlistItem,
  WatchlistData,
} from "./types";

const initialWatchlistState: WatchlistContextType = {
  watchlistCount: 0,
  watchlist: {},
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  clearWatchlist: () => {},
};

export const WatchlistContext = createContext<WatchlistContextType>(
  initialWatchlistState,
);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<{ [key: string]: WatchlistItem }>(
    {},
  );

  useEffect(() => {
    const storedWatchlist = getLocalStorageData("watchlist");
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

  const watchlistCount = Object.keys(watchlist).length;

  const addToWatchlist = (item: WatchlistItem) => {
    setWatchlist((prevWatchlist) => {
      const newWatchlist: WatchlistData = {
        ...prevWatchlist,
        [item.id.toString()]: {
          ...item,
          timestamp: Date.now(),
        },
      };
      setLocalStorageData("watchlist", newWatchlist);
      return newWatchlist;
    });
  };

  const removeFromWatchlist = (id: number) => {
    setWatchlist((prevWatchlist) => {
      const newWatchlist = { ...prevWatchlist };
      delete newWatchlist[id.toString()];
      setLocalStorageData("watchlist", newWatchlist);
      return newWatchlist;
    });
  };

  const clearWatchlist = () => {
    setWatchlist({});
    setLocalStorageData("watchlist", {});
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        watchlistCount,
        addToWatchlist,
        removeFromWatchlist,
        clearWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
