export interface WatchlistItem {
  timestamp: number;
  id: number;
  type: "tv" | "movie";
}

export interface WatchlistContextType {
  watchlist: { [key: string]: WatchlistItem };
  addToWatchlist: (item: WatchlistItem) => void;
  removeFromWatchlist: (id: number) => void;
  clearWatchlist: () => void;
}

export const initialWatchlistState: WatchlistContextType = {
  watchlist: {},
  addToWatchlist: () => {},
  removeFromWatchlist: () => {},
  clearWatchlist: () => {},
};
