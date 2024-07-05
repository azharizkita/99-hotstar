import { CSSProperties } from "react";
import { contentSafeAreaStyles, spacing } from "@/styles/utils";

export const flexContainerStyle: CSSProperties = {
  alignItems: "center",
  position: "relative",
  flexGrow: 0,
  gap: spacing(4),
};

export const sectionStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: spacing(2),
  ...contentSafeAreaStyles,
  paddingRight: 0,
  paddingBottom: 0,
  paddingTop: 0,
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
