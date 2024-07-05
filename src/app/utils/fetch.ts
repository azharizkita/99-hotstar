import { TMDB_BEARER_TOKEN } from "@/constants/tmdb";

interface FetchDataResponse<T> {
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

const fetchData = async <T>({
  destination,
  query,
}: {
  destination: string;
  query: string;
}): Promise<FetchDataResponse<T>> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${destination}?${query}`,
    {
      next: { revalidate: 1 * 30 * 60 },
      headers: {
        accept: "application/json",
        Authorization: TMDB_BEARER_TOKEN,
      },
    },
  );

  const data: FetchDataResponse<T> = await response.json();
  return data;
};

export default fetchData;
