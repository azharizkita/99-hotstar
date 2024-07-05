"use client";

import { createContext, useState, useEffect, type ReactNode } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../utils/local-storage";
import {
  WatchlistContextType,
  initialWatchlistState,
  WatchlistItem,
} from "./types";

export const WatchlistContext = createContext<WatchlistContextType>(
  initialWatchlistState,
);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<{ [key: string]: WatchlistItem }>(
    {},
  );

  useEffect(() => {
    const storedWatchlist = getLocalStorageData("watchlist");
    if (!storedWatchlist) return;
    setWatchlist(storedWatchlist);
  }, []);

  const addToWatchlist = (item: WatchlistItem) => {
    setWatchlist((prevWatchlist) => {
      const newWatchlist = {
        ...prevWatchlist,
        [item.id.toString()]: item,
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
      value={{ watchlist, addToWatchlist, removeFromWatchlist, clearWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
