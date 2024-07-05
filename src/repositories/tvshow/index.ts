import { fetchData } from "@/app/utils";
import type { TVShowItem } from "../types";
import useSWR, { type SWRResponse } from "swr";

export const getTVShow = async () => {
  const result = await fetchData<TVShowItem[]>({
    destination: "tv/top_rated",
    query: "page=1",
  });

  return result;
};

export const getTrendingTVShows = async () => {
  const result = await fetchData<TVShowItem[]>({
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
  const result = await fetchData<TVShowItem[]>({
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
