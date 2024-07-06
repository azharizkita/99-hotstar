import { Flex } from "@/components/base";
import { flexScrollContainerStyle, sectionStyle } from "./styles";
import Card from "@/components/Card";
import { getTrendingTVShows } from "@/repositories/tvshow";

export const TrendingTVShows = async () => {
  const { results } = await getTrendingTVShows();
  return (
    <section style={sectionStyle}>
      <h2>TV Shows of the week</h2>
      <Flex style={flexScrollContainerStyle}>
        {results.map(
          ({ id, overview, poster_path, original_name, name }, i) => (
            <Card
              itemId={id}
              type="movie"
              key={i}
              title={original_name ?? name}
              description={overview ?? ""}
              imageUrl={poster_path ?? ""}
              entrypoint="home"
            />
          ),
        )}
      </Flex>
    </section>
  );
};
