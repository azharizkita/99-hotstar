import { Flex } from "../base";
import { overviewText, tvShowDetailsContainer } from "./styles";
import {
  containerStles,
  imageHolderStyle,
  linearGradientStyle,
} from "../Herotron/styles";

const TVShowDetailsLoading = () => {
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
      <Flex style={tvShowDetailsContainer}>
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

export default TVShowDetailsLoading;
