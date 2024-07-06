import { CSSProperties } from "react";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";

export const pageStyles: CSSProperties = {
  ...contentSafeAreaStyles,
  paddingTop: spacing(15),
  gap: spacing(4),
  flexDirection: "column",
};

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${spacing(37)}, 1fr))`,
  gap: spacing(4),
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

export const searchInputStyle: CSSProperties = {
  padding: spacing(2),
  fontSize: "1rem",
  borderRadius: spacing(2),
  border: "none",
  outline: "0.5px solid var(--secondary-glow)",
  width: "100%",
  maxWidth: "300px",
};

export const headerStyle: CSSProperties = {
  display: "flex",
  flexGrow: 0,
  flexDirection: "row",
  alignItems: "center",
  gap: spacing(4),
};

export const contentStyle: CSSProperties = {
  flexDirection: "column",
  gap: "1rem",
};

export const radioContainerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing(2),
};

export const radioStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: spacing(1),
};