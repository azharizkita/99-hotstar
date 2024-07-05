import { Flex } from "@/components/base";
import { flexScrollContainerStyle, sectionStyle } from "./styles";
import Card from "@/components/Card";
import { getTrendingMovies } from "@/repositories/movies";

export const TrendingMovies = async () => {
  const { results } = await getTrendingMovies();
  return (
    <section style={sectionStyle}>
      <h2>Movies of the week</h2>
      <Flex style={flexScrollContainerStyle}>
        {results.map(({ overview, poster_path, original_title, title }, i) => (
          <Card
            key={i}
            title={original_title ?? title}
            description={overview}
            imageUrl={poster_path ?? ""}
          />
        ))}
      </Flex>
    </section>
  );
};
