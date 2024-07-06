import { CSSProperties } from "react";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";

export const movieDetailsContainer: CSSProperties = {
  ...contentSafeAreaStyles,
  flexGrow: 0,
  gap: spacing(2),
};

export const overviewText: CSSProperties = {
  maxWidth: "650px",
};

export const genreContainer: CSSProperties = {
  flexGrow: 0,
  flexDirection: "row",
  gap: spacing(4),
};

export const genreItem: CSSProperties = {
  flexGrow: 0,
  background: "var(--translucent-background)",
  padding: spacing(2),
  borderRadius: spacing(2),
};
