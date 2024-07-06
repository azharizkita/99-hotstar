"use client";

import { Flex } from "@/components/base";
import Button from "@/components/base/Button";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.error(error);
  return (
    <Flex
      style={{
        ...contentSafeAreaStyles,
        alignItems: "center",
        justifyContent: "center",
        gap: spacing(2),
      }}
    >
      <h2>Umm something went wrong...</h2>
      <Link href="/home">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </Flex>
  );
}
