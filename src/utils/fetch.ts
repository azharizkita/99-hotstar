import { TMDB_BEARER_TOKEN } from "@/constants/tmdb";

const fetchData = async <T>({
  destination,
  query,
}: {
  destination: string;
  query: string;
}): Promise<T> => {
  const headers = {
    accept: "application/json",
    Authorization: TMDB_BEARER_TOKEN || "",
  };
  const response = await fetch(
    `https://api.themoviedb.org/3/${destination}?${query}`,
    {
      method: "GET",
      headers,
      next: { revalidate: 1 * 30 * 60 },
    },
  );

  const data: T = await response.json();
  return data;
};

export default fetchData;
