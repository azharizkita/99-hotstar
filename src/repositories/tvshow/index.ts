import { fetchData } from "@/app/utils";
import type { TVShowItem } from "../types";

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
