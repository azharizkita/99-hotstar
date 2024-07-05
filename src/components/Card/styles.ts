import { spacing } from "@/styles/utils";
import { CSSProperties } from "react";

export const cardStyle: CSSProperties = {
  position: "relative",
  borderRadius: spacing(2),
  cursor: "pointer",
  transition: "transform 750ms ease-in-out, box-shadow 750ms ease-in-out",
  display: "flex",
  width: "154px",
  height: "231px",
  flexShrink: 0,
  overflow: "hidden",
  outline: "1px solid var(--translucent-background)",
};

export const descriptionStyles: CSSProperties = {
  position: "absolute",
  bottom: "-100%",
  left: 0,
  right: 0,
  transitionDelay: "150ms",
  zIndex: 1,
  backdropFilter: "blur(4px)",
  alignSelf: "end",
  padding: spacing(2),
  borderRadius: spacing(2),
  gap: spacing(2),
  background: "var(--translucent-background)",
  transition: "bottom 750ms ease-in-out",
};

export const descriptionTextStyles: CSSProperties = {
  fontSize: "0.6em",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  lineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
};

export const titleStyles: CSSProperties = {
  fontSize: "0.75em",
  fontWeight: 600,
};

export const hoverCircleStyle: CSSProperties = {
  position: "absolute",
  top: spacing(2),
  right: spacing(2),
  width: "30px",
  height: "30px",
  padding: spacing(1),
  borderRadius: spacing(2),
  backgroundColor: "white",
  transform: "scale(0)",
  outline: "0.5px solid var(--disabled-glow)",
};
