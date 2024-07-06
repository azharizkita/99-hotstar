"use client";

import { useState } from "react";
import { Flex } from "../base";
import type { TVShowDetail } from "@/repositories/types";
import { useGetTVShowDetail } from "@/repositories/tvshow";
import Card from "../Card";
import { selectContainer, selectStyle, gridStyle } from "./styles";

const SeasonContent = ({ data }: { data: TVShowDetail }) => {
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);
  const { data: seasonDetail } = useGetTVShowDetail(data.id, selectedSeason);

  return (
    <>
      <label htmlFor="season-selection">
        <h2>Select Season</h2>
      </label>
      <p style={{ lineHeight: "10px" }}>
        {data.number_of_seasons} seasons in total
      </p>
      <Flex style={selectContainer}>
        <select
          id="season-selection"
          value={selectedSeason ?? ""}
          onChange={(e) =>
            setSelectedSeason(e.target.value ? parseInt(e.target.value) : null)
          }
          style={selectStyle}
        >
          {data.seasons.map((season) => (
            <option key={season.id} value={season.season_number}>
              {season.name}
            </option>
          ))}
        </select>
      </Flex>
      <div style={gridStyle}>
        {seasonDetail &&
          seasonDetail.episodes.map((episode) => (
            <Card
              key={episode.id}
              imageUrl={episode.still_path}
              title={`E${episode.episode_number} - ${episode.name}`}
              description={episode.overview}
              priority={false}
              itemId={episode.id}
              type="tv"
              isEpisode
              entrypoint="episode"
              releaseDate={episode.air_date}
              duration={episode.runtime}
            />
          ))}
      </div>
    </>
  );
};

export default SeasonContent;
