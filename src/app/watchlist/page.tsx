import { Flex } from "@/components/base";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";
import WatchlistContent from "./WatchlistContent";

export default function Watchlist() {
  return (
    <Flex
      style={{
        ...contentSafeAreaStyles,
        paddingTop: spacing(15),
        gap: spacing(4),
        flexDirection: "column",
      }}
    >
      <WatchlistContent />
    </Flex>
  );
}
