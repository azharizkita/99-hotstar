import { fetchData } from "@/app/utils";
import type { MovieItem } from "../types";

export const getMovies = async () => {
  const result = await fetchData<MovieItem[]>({
    destination: "movie/top_rated",
    query: "page=1",
  });

  return result;
};

export const getTrendingMovies = async () => {
  const result = await fetchData<MovieItem[]>({
    destination: "trending/movie/week",
    query: "",
  });

  return result;
};
