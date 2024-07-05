import { fetchData } from "@/app/utils";
import type { MovieItem } from "../types";

const getMovies = async () => {
  const result = await fetchData<MovieItem[]>({
    destination: "discover/movie",
    query:
      "include_adult=true&include_null_first_air_dates=false&page=1&sort_by=vote_count.desc",
  });

  return result;
};

export default getMovies;
