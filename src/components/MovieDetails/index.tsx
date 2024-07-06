import { Flex } from "../base";
import Herotron from "../Herotron";
import { Mergeable } from "@/utils/array";
import type { MovieDetail, MovieItem, TVShowItem } from "@/repositories/types";
import {
  movieDetailsContainer,
  overviewText,
  genreContainer,
  genreItem,
} from "./styles";

const MovieDetails = ({ data }: { data: MovieDetail }) => {
  const herotronData: Mergeable<MovieItem, TVShowItem> = {
    adult: data.adult,
    backdrop_path: data.backdrop_path,
    first_air_date: "",
    id: data.id,
    name: "",
    origin_country: data.origin_country,
    original_language: data.original_language,
    original_name: "",
    release_date: data.release_date,
    original_title: data.original_title,
    popularity: data.popularity,
    poster_path: data.poster_path,
    title: data.title,
    video: data.video,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
    overview: "",
  };

  return (
    <Flex>
      <Herotron isSingle data={[herotronData]} />
      <Flex style={movieDetailsContainer}>
        <h2>Overview</h2>
        <p style={overviewText}>{data.overview}</p>

        <h2>Genre</h2>
        <Flex style={genreContainer}>
          {data.genres.map(({ name }, i) => (
            <Flex key={i} style={genreItem}>
              <p>{name}</p>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MovieDetails;
