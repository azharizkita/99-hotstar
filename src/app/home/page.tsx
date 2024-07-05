import { Flex } from "@/components/base";
import Card from "@/components/Card";
import { getMovies } from "@/repositories";
import getTVShow from "@/repositories/tvshow";
import type { Metadata } from "next";
import {
  flexContainerStyle,
  sectionStyle,
  flexScrollContainerStyle,
} from "./styles";
import { merge } from "@/utils/array";
import Herotron from "./Herotron";

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
      <section style={sectionStyle}>
        <h2>Top rated Movies and TV Shows</h2>
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
                key={i}
                title={original_title ?? title ?? original_name ?? name}
                description={overview}
                imageUrl={poster_path ?? ""}
              />
            ),
          )}
        </Flex>
      </section>
    </Flex>
  );
}
