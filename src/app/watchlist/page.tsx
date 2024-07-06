import { Flex } from "@/components/base";
import WatchlistContent from "./WatchlistContent";
import { pageStyles } from "./styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "99 Hotstar | Watchlist",
};

export default function Watchlist() {
  return (
    <Flex style={pageStyles}>
      <WatchlistContent />
    </Flex>
  );
}
