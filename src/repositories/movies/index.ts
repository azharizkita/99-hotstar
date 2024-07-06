import { fetchData } from "@/app/utils";
import type { FetchDataResponse, MovieDetail, MovieItem } from "../types";
import useSWR, { SWRResponse } from "swr";

export const getMovies = async () => {
  const result = await fetchData<FetchDataResponse<MovieItem[]>>({
    destination: "movie/top_rated",
    query: "page=1",
  });

  return result;
};

export const getMovieDetails = async (id: string | number) => {
  const result = await fetchData<MovieDetail>({
    destination: `movie/${id}`,
    query: "",
  });

  return result;
};

export const getTrendingMovies = async () => {
  const result = await fetchData<FetchDataResponse<MovieItem[]>>({
    destination: "trending/movie/week",
    query: "",
  });

  return result;
};

const searchMovies = async (props: string): Promise<{ data: MovieItem[] }> => {
  const [_, keyword] = props as unknown as string[];
  const _keyword = encodeURIComponent(keyword);
  const result = await fetchData<FetchDataResponse<MovieItem[]>>({
    destination: "search/movie",
    query: `query=${_keyword}&include_adult=false&language=en-US&page=1`,
  });

  return { data: result.results };
};

const searchMoviesFetcher = async (keyword: string): Promise<MovieItem[]> => {
  const result = await searchMovies(keyword);
  return result.data;
};

export const useSearchMovies = (
  keyword: string | null,
): SWRResponse<MovieItem[], any> => {
  return useSWR<MovieItem[], any>(
    keyword ? ["searchMovies", keyword] : null,
    searchMoviesFetcher,
  );
};
