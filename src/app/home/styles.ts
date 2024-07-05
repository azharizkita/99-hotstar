import { CSSProperties } from "react";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";

export const flexContainerStyle: CSSProperties = {
  alignItems: "center",
  position: "relative",
  flexGrow: 0,
  gap: spacing(1),
};

export const flexInnerContainerStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  alignItems: "end",
  flexDirection: "row",
  ...contentSafeAreaStyles,
};

export const flexContentStyle: CSSProperties = {
  gap: spacing(5),
  width: "100%",
  maxWidth: "250px",
  position: "absolute",
  bottom: "10vh",
};

export const buttonContainerStyle: CSSProperties = {
  gap: spacing(2),
  flexDirection: "row",
};

export const sectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: spacing(2),
  ...contentSafeAreaStyles,
  paddingRight: 0,
};

export const flexScrollContainerStyle: CSSProperties = {
  gap: spacing(4),
  flexDirection: "row",
  overflowX: "scroll",
  overflowY: "visible",
  position: "relative",
  padding: spacing(2),
  paddingBottom: spacing(4),
};

export const headingStyle: CSSProperties = {
  lineHeight: "1px",
};

export const imageHolderStyle: CSSProperties = {
  position: "absolute",
  height: "100%",
  width: "100%",
  overflow: "hidden",
};

export const linearGradientStyle: CSSProperties = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "20%",
  background: "linear-gradient(to top, black, transparent)",
};
