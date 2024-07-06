import { fetchData } from "@/utils";
import type {
  FetchDataResponse,
  SeasonDetail,
  TVShowDetail,
  TVShowItem,
} from "../types";
import useSWR, { type SWRResponse } from "swr";

export const getTVShow = async () => {
  const result = await fetchData<FetchDataResponse<TVShowItem[]>>({
    destination: "tv/top_rated",
    query: "page=1",
  });

  return result;
};

export const getTVShowDetails = async (id: string | number) => {
  const result = await fetchData<TVShowDetail>({
    destination: `tv/${id}`,
    query: "",
  });

  return result;
};

const getTVShowSeasonDetails = async (props: string): Promise<SeasonDetail> => {
  const [_, id, seasonNumber] = props as unknown as string[];
  const result = await fetchData<SeasonDetail>({
    destination: `tv/${id}/season/${seasonNumber}`,
    query: "language=en-US",
  });

  return result;
};

const searchTVShowSeasonDetails = async (
  keyword: string,
): Promise<SeasonDetail> => {
  const result = await getTVShowSeasonDetails(keyword);
  return result;
};

export const useGetTVShowDetail = (
  id: string | number,
  seasonNumber?: string | number | null,
): SWRResponse<SeasonDetail, any> => {
  return useSWR<SeasonDetail, any>(
    id || seasonNumber ? ["getTVShowSeasonDetails", id, seasonNumber] : null,
    searchTVShowSeasonDetails,
  );
};

export const getTrendingTVShows = async () => {
  const result = await fetchData<FetchDataResponse<TVShowItem[]>>({
    destination: "trending/tv/week",
    query: "",
  });

  return result;
};

const searchTVShows = async (
  props: string,
): Promise<{ data: TVShowItem[] }> => {
  const [_, keyword] = props as unknown as string[];
  const _keyword = encodeURIComponent(keyword);
  const result = await fetchData<FetchDataResponse<TVShowItem[]>>({
    destination: "search/tv",
    query: `query=${_keyword}&include_adult=false&language=en-US&page=1`,
  });

  return { data: result.results };
};

const searchSearchTVShows = async (keyword: string): Promise<TVShowItem[]> => {
  const result = await searchTVShows(keyword);
  return result.data;
};

export const useSearchTVShows = (
  keyword: string | null,
): SWRResponse<TVShowItem[], any> => {
  return useSWR<TVShowItem[], any>(
    keyword ? ["searchTVShows", keyword] : null,
    searchSearchTVShows,
  );
};
