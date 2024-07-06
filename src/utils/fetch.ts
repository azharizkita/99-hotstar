import { TMDB_API_URL, TMDB_BEARER_TOKEN } from "@/constants/tmdb";
import { notFound } from "next/navigation";

const revalidateTime = 3600 * 20;

const headers: HeadersInit = {
  accept: "application/json",
  Authorization: TMDB_BEARER_TOKEN || "",
};

const fetchData = async <T>({
  destination,
  query,
}: {
  destination: string;
  query: string;
}): Promise<T> => {
  const response = await fetch(`${TMDB_API_URL}/3/${destination}?${query}`, {
    method: "GET",
    headers,
    next: { revalidate: revalidateTime },
  });

  if (response.status === 404) {
    notFound();
  }

  const data = await response.json();

  return data as T;
};

export default fetchData;
