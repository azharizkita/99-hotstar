import { Flex } from "@/components/base";
import SearchContent from "./SearchContent";
import { pageStyles } from "./styles";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "99 Hotstar | Search",
};

export default function Search() {
  return (
    <Flex style={pageStyles}>
      <SearchContent />
    </Flex>
  );
}
