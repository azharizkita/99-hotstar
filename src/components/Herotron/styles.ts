import { contentSafeAreaStyles, spacing } from "@/styles/utils";
import { CSSProperties } from "react";

export const containerStles: CSSProperties = {
  flexGrow: 0,
  width: "100%",
  alignItems: "end",
  position: "relative",
  aspectRatio: "16 / 9",
  maxHeight: "80vh",
  minHeight: "470px",
};

export const buttonContainerStyle: CSSProperties = {
  gap: spacing(2),
  flexDirection: "row",
};

export const flexContentStyle: CSSProperties = {
  gap: spacing(3),
  width: "100%",
  maxWidth: "250px",
  position: "absolute",
  bottom: "10vh",
};

export const flexInnerContainerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  alignItems: "end",
  flexDirection: "row",
  ...contentSafeAreaStyles,
};

export const headingStyle: CSSProperties = {
  lineHeight: "1em",
};

export const imageHolderStyle: CSSProperties = {
  position: "absolute",
  height: "100%",
  minHeight: "100%",
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  scrollSnapType: "x mandatory",
  scrollBehavior: "smooth",
  backgroundColor: "var(--disabled-glow)",
};

export const imageStyle: CSSProperties = {
  flexShrink: 0,
  width: "100%",
  height: "100%",
};

export const linearGradientStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "20%",
  background: "linear-gradient(to top, black, transparent)",
};
