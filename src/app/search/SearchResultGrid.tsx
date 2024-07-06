import { useMemo } from "react";
import Card from "@/components/Card";
import { Flex } from "@/components/base";
import { gridStyle, contentStyle } from "./styles";
import { Mergeable } from "@/utils/array";
import { MovieItem, TVShowItem } from "@/repositories/types";

type SearchResultGridProps = {
  data: Mergeable<MovieItem, TVShowItem>[];
};

const SearchResultGrid: React.FC<SearchResultGridProps> = ({ data }) => {
  const renderedData = useMemo(
    () =>
      data.map((item) => ({
        key: item.id,
        imageUrl: item.poster_path ?? "",
        title: item.title ?? item.name,
        description: item.overview,
        itemId: item.id,
        type: item.title ? "movie" : "tv",
      })),
    [data],
  );

  return (
    <Flex style={contentStyle}>
      <div style={gridStyle}>
        {renderedData.map((item) => (
          <Card
            key={item.key}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description ?? ""}
            itemId={item.itemId}
            type={item.type as "tv" | "movie"}
            entrypoint="search"
          />
        ))}
      </div>
    </Flex>
  );
};

export default SearchResultGrid;
