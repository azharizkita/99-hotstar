"use client";

import { getTVShowSeasonDetails } from "@/repositories/tvshow";
import type { SeasonDetail } from "@/repositories/types";
import useSWR, { type SWRResponse } from "swr";

export const useGetTVShowDetail = (
  id: string | number,
  seasonNumber?: string | number | null,
): SWRResponse<SeasonDetail, any> => {
  return useSWR<SeasonDetail, any>(
    id || seasonNumber ? ["getTVShowSeasonDetails", id, seasonNumber] : null,
    getTVShowSeasonDetails,
  );
};
