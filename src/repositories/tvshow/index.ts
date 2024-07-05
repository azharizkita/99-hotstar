import { fetchData } from "@/app/utils";
import type { TVShowItem } from "../types";

const getTVShow = async () => {
  const result = await fetchData<TVShowItem[]>({
    destination: "discover/tv",
    query:
      "include_adult=true&include_null_first_air_dates=false&page=1&sort_by=vote_count.desc",
  });

  return result;
};

export default getTVShow;
