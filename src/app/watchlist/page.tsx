import { Flex } from "@/components/base";
import WatchlistContent from "./WatchlistContent";
import { pageStyles } from "./styles";

export default function Watchlist() {
  return (
    <Flex style={pageStyles}>
      <WatchlistContent />
    </Flex>
  );
}
