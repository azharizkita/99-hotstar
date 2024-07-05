import { CSSProperties } from "react";
import { spacing } from "@/styles/utils";

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${spacing(38)}, 1fr))`,
  gap: spacing(4),
  width: "100%",
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
