import { Flex } from "@/components/base";
import Button from "@/components/base/Button";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `99 Hotstar | Not Found`,
  description: "We could not found what that...",
};

export default function NotFound() {
  return (
    <Flex
      style={{
        ...contentSafeAreaStyles,
        alignItems: "center",
        justifyContent: "center",
        gap: spacing(2),
      }}
    >
      <h2>Umm we could not find that...</h2>
      <Link href="/home">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </Flex>
  );
}
