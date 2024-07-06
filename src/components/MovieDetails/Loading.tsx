import { Flex } from "../base";
import { movieDetailsContainer, overviewText } from "./styles";
import {
  containerStles,
  imageHolderStyle,
  linearGradientStyle,
} from "../Herotron/styles";

const MovieDetailsLoading = () => {
  return (
    <Flex>
      <Flex style={containerStles}>
        <Flex id="image-holder" style={imageHolderStyle}>
          <Flex
            style={{
              width: "100%",
              height: "100%",
              background: "var(--translucent-background)",
            }}
          />
          <div style={linearGradientStyle} />
        </Flex>
      </Flex>
      <Flex style={movieDetailsContainer}>
        <h2>Overview</h2>
        <Flex
          style={{
            ...overviewText,
            flexGrow: 0,
            height: "64.5px",
            width: "100%",
            background: "var(--translucent-background)",
          }}
        />
      </Flex>
    </Flex>
  );
};

export default MovieDetailsLoading;
