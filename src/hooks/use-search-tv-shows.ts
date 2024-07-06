"use client";

import { searchTVShows } from "@/repositories/tvshow";
import type { TVShowItem } from "@/repositories/types";
import useSWR, { type SWRResponse } from "swr";

export const useSearchTVShows = (
  keyword: string | null,
): SWRResponse<TVShowItem[]> => {
  return useSWR<TVShowItem[]>(
    keyword ? ["searchTVShows", keyword] : null,
    searchTVShows,
  );
};
