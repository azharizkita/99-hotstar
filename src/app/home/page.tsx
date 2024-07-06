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
  title: "99 Hotstar | Home",
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
            ({ overview, poster_path, title, name, id }, i) => (
              <Card
                itemId={id}
                type={title ? "movie" : "tv"}
                priority
                key={i}
                title={title ?? name}
                description={overview ?? ""}
                imageUrl={poster_path ?? ""}
                entrypoint="home"
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
