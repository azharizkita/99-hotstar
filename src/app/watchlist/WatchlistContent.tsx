"use client";

import { useContext, useMemo, useState } from "react";
import { WatchlistContext } from "@/context/watchlist-storage";
import Card from "@/components/Card";
import { Flex } from "@/components/base";
import useDebouncedValue from "@/hooks/use-debounced-value";
import {
  gridStyle,
  headerStyle,
  searchInputStyle,
  contentStyle,
} from "./styles";
import EmptyMessage from "@/components/EmptyMessage";

const WatchlistContent = () => {
  const { watchlist, watchlistCount } = useContext(WatchlistContext);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 450);

  const sortedWatchlist = useMemo(() => {
    return Object.values(watchlist).sort(
      (a, b) => (a.timestamp ?? 0) - (b.timestamp ?? 0),
    );
  }, [watchlist]);

  const filteredWatchlist = useMemo(() => {
    return sortedWatchlist.filter((item) =>
      item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
    );
  }, [sortedWatchlist, debouncedSearchTerm]);

  if (!watchlist || watchlistCount === 0) {
    return (
      <>
        <Flex style={headerStyle}>
          <h1>Watchlist</h1>
        </Flex>
        <EmptyMessage message="You don't have anything to watch" />
      </>
    );
  }

  return (
    <>
      <Flex style={headerStyle}>
        <h1>Watchlist</h1>
        <input
          type="text"
          placeholder="Search your watchlist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />
      </Flex>

      {debouncedSearchTerm && filteredWatchlist.length === 0 ? (
        <EmptyMessage message={`Could not find "${debouncedSearchTerm}"`} />
      ) : (
        <Flex style={contentStyle}>
          <div style={gridStyle}>
            {filteredWatchlist.map((item) => (
              <Card
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                itemId={item.id}
                type={item.type}
              />
            ))}
          </div>
        </Flex>
      )}
    </>
  );
};

export default WatchlistContent;
