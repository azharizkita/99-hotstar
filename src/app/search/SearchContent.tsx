"use client";

import { useMemo, useState } from "react";
import { Flex } from "@/components/base";
import useDebouncedValue from "@/hooks/use-debounced-value";
import EmptyMessage from "@/components/EmptyMessage";
import { useSearchMovies } from "@/repositories/movies";
import { useSearchTVShows } from "@/repositories/tvshow";
import { Mergeable } from "@/utils/array";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { headerStyle, searchInputStyle } from "./styles";
import SearchFilter from "./SearchFilter";
import SearchResultGrid from "./SearchResultGrid";

const SearchContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<"all" | "movies" | "tvShows">("all");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 450);

  const { data: movies, isLoading: isMoviesLoading } = useSearchMovies(
    filter === "tvShows" ? null : debouncedSearchTerm,
  );
  const { data: tvShows, isLoading: isTVShowsLoading } = useSearchTVShows(
    filter === "movies" ? null : debouncedSearchTerm,
  );

  const isLoading = isMoviesLoading || isTVShowsLoading;

  const filteredData = useMemo(() => {
    let combinedData: Mergeable<MovieItem, TVShowItem>[] = [];

    if (filter === "all") {
      combinedData = (movies?.flatMap((movie, index) => [
        movie,
        tvShows?.[index],
      ]) || []) as unknown as Mergeable<MovieItem, TVShowItem>[];
    } else if (filter === "movies") {
      combinedData = (movies || []) as unknown as Mergeable<
        MovieItem,
        TVShowItem
      >[];
    } else if (filter === "tvShows") {
      combinedData = (tvShows || []) as unknown as Mergeable<
        MovieItem,
        TVShowItem
      >[];
    }

    return combinedData.filter((item) => item !== undefined); // Remove any undefined entries
  }, [movies, tvShows, filter]);

  const renderEmptyMessage = () => {
    if (isLoading) {
      return "Loading...";
    } else if (debouncedSearchTerm) {
      return `Could not find "${debouncedSearchTerm}"`;
    } else {
      return "Let's watch some stuff";
    }
  };

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (newFilter: "all" | "movies" | "tvShows") => {
    setFilter(newFilter);
  };

  return (
    <>
      <Flex style={headerStyle}>
        <h1>Search</h1>
        <input
          type="text"
          placeholder="Any Movies or TV Shows ..."
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
          style={searchInputStyle}
        />
      </Flex>
      <SearchFilter filter={filter} onFilterChange={handleFilterChange} />
      {!filteredData.length ? (
        <EmptyMessage message={renderEmptyMessage()} />
      ) : (
        <SearchResultGrid data={filteredData} />
      )}
    </>
  );
};

export default SearchContent;
