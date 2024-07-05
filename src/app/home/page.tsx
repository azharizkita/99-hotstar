import { Flex } from "@/components/base";
import Card from "@/components/Card";
import type { Metadata } from "next";
import {
  flexContainerStyle,
  sectionStyle,
  flexScrollContainerStyle,
} from "./styles";
import { merge } from "@/utils/array";
import Herotron from "../../components/Herotron";
import { getMovies } from "@/repositories/movies";
import { getTVShow } from "@/repositories/tvshow";
import { TrendingMovies } from "./TrendingMovies";
import { TrendingTVShows } from "./TrendingTVShows";
import { spacing } from "@/styles/utils";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const movies = await getMovies();
  const tvShows = await getTVShow();
  const overallTopRated = merge(movies.results, tvShows.results, 5);

  return (
    <Flex style={flexContainerStyle}>
      <Herotron data={overallTopRated} />
      <section style={{ ...sectionStyle, marginTop: spacing(-16), zIndex: 2 }}>
        <h2>Movies and TV Shows</h2>
        <Flex style={flexScrollContainerStyle}>
          {overallTopRated.map(
            (
              {
                overview,
                poster_path,
                original_title,
                title,
                original_name,
                name,
              },
              i,
            ) => (
              <Card
                priority
                key={i}
                title={original_title ?? title ?? original_name ?? name}
                description={overview}
                imageUrl={poster_path ?? ""}
              />
            ),
          )}
        </Flex>
      </section>
      <TrendingMovies />
      <TrendingTVShows />
    </Flex>
  );
}
