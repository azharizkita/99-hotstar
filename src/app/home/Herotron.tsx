"use client";

import { Flex } from "@/components/base";
import {
  buttonContainerStyle,
  flexContentStyle,
  flexInnerContainerStyle,
  headingStyle,
  imageHolderStyle,
  linearGradientStyle,
} from "./styles";
import Button from "@/components/base/Button";
import { PlaylistAddIcon } from "@/Icons";
import { MovieItem, TVShowItem } from "@/repositories/types";
import { Mergeable } from "@/utils/array";
import Image from "@/components/base/Image";

const Herotron = (props: { data: Mergeable<MovieItem, TVShowItem>[] }) => {
  const { data } = props;
  return (
    <Flex
      style={{
        flexGrow: 0,
        width: "100%",
        alignItems: "end",
        position: "relative",
        aspectRatio: "16 / 9",
        maxHeight: "80vh",
      }}
    >
      <Flex id="image-holder" style={imageHolderStyle}>
        {data.map(({ backdrop_path }, i) => (
          <Image
            isBackground
            src={backdrop_path ?? ""}
            key={i}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        ))}
        <div style={linearGradientStyle} />
      </Flex>
      <Flex style={flexInnerContainerStyle}>
        <Flex style={flexContentStyle}>
          <h2 style={headingStyle}>Movie name</h2>
          <p>Movie description</p>
          <Flex style={buttonContainerStyle}>
            <Button variant="translucent" style={{ width: "100%" }}>
              Watch now
            </Button>
            <Button variant="translucent" style={{ width: "fit-content" }}>
              <PlaylistAddIcon width="1.5em" height="1.5em" />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Herotron;
