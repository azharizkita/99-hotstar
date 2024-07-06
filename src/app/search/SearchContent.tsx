"use client";

import { useMemo } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Flex } from "@/components/base";
import useDebouncedValue from "@/hooks/use-debounced-value";
import EmptyMessage from "@/components/EmptyMessage";
import { Mergeable } from "@/utils/array";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { headerStyle, searchInputStyle } from "./styles";
import SearchFilter from "./SearchFilter";
import SearchResultGrid from "./SearchResultGrid";
import { useSearchMovies } from "@/hooks/use-search-movies";
import { useSearchTVShows } from "@/hooks/use-search-tv-shows";

const SearchContent = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchTerm = searchParams.get("q") || "";
  const filter = (searchParams.get("filter") || "all") as
    | "all"
    | "movies"
    | "tvShows";

  const debouncedSearchTerm = useDebouncedValue(searchTerm, 650);

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

  const updateSearchParams = (params: { [key: string]: string }) => {
    const newSearchParams = new URLSearchParams(searchParams as any);

    Object.keys(params).forEach((key) => {
      newSearchParams.set(key, params[key]);
    });

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  const handleSearchTermChange = (value: string) => {
    updateSearchParams({ q: value });
  };

  const handleFilterChange = (newFilter: "all" | "movies" | "tvShows") => {
    updateSearchParams({ filter: newFilter });
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
