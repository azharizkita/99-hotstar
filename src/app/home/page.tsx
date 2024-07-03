import { Flex } from "@/components/base";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <Flex style={{ justifyContent: "center", alignItems: "center" }}>
      <h1>Home</h1>
    </Flex>
  );
}
