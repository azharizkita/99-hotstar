import { fetchData } from "@/utils";
import type {
  FetchDataResponse,
  SeasonDetail,
  TVShowDetail,
  TVShowItem,
} from "../types";

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

export const getTVShowSeasonDetails = async (props: string) => {
  const [_, id, seasonNumber] = props as unknown as string[];
  const result = await fetchData<SeasonDetail>({
    destination: `tv/${id}/season/${seasonNumber}`,
    query: "language=en-US",
  });

  return result;
};

export const getTrendingTVShows = async () => {
  const result = await fetchData<FetchDataResponse<TVShowItem[]>>({
    destination: "trending/tv/week",
    query: "",
  });

  return result;
};

export const searchTVShows = async (props: string) => {
  const [_, keyword] = props as unknown as string[];
  const _keyword = encodeURIComponent(keyword);
  const result = await fetchData<FetchDataResponse<TVShowItem[]>>({
    destination: "search/tv",
    query: `query=${_keyword}&include_adult=false&language=en-US&page=1`,
  });

  return result.results;
};
