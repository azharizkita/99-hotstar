import { contentSafeAreaStyles, spacing } from "@/styles/utils";
import { CSSProperties } from "react";

export const contentWrapper: CSSProperties = {
  minHeight: `calc((135px * 3) + (${spacing(4)} * 3))`,
  paddingTop: spacing(2),
};

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${spacing(105)}, 2fr))`,
  gap: spacing(4),
  width: "100%",
};

export const selectContainer: CSSProperties = {
  flexGrow: 0,
  maxWidth: "250px",
};

export const selectStyle: CSSProperties = {
  display: "flex",
  padding: spacing(2),
  borderRadius: spacing(2),
  flexGrow: 0,
};

export const tvShowDetailsContainer: CSSProperties = {
  ...contentSafeAreaStyles,
  gap: spacing(2),
};

export const overviewText: CSSProperties = {
  maxWidth: "650px",
};

export const genreContainer: CSSProperties = {
  flexDirection: "row",
  gap: spacing(4),
  flexWrap: "wrap",
};

export const genreItem: CSSProperties = {
  flexGrow: 0,
  background: "var(--translucent-background)",
  padding: spacing(2),
  borderRadius: spacing(2),
};
