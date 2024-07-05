import { Flex } from "@/components/base";
import SearchContent from "./SearchContent";
import { pageStyles } from "./styles";

export default function Search() {
  return (
    <Flex style={pageStyles}>
      <SearchContent />
    </Flex>
  );
}
