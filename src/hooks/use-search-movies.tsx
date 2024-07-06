"use client";

import { searchMovies } from "@/repositories/movies";
import type { MovieItem } from "@/repositories/types";
import useSWR, { type SWRResponse } from "swr";

export const useSearchMovies = (
  keyword: string | null,
): SWRResponse<MovieItem[]> => {
  return useSWR<MovieItem[]>(
    keyword ? ["searchMovies", keyword] : null,
    searchMovies,
  );
};
