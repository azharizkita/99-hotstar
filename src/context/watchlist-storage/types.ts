export interface WatchlistItem {
  timestamp?: number;
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  type: "tv" | "movie";
}

export type WatchlistData = { [key: string]: WatchlistItem };

export interface WatchlistContextType {
  watchlistCount: number;
  watchlist: WatchlistData;
  addToWatchlist: (item: WatchlistItem) => void;
  removeFromWatchlist: (id: number) => void;
  clearWatchlist: () => void;
}
