import { spacing } from "@/styles/utils";
import type { CSSProperties } from "react";

export const sidebarStyles: CSSProperties = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  viewTransitionName: "disabled",
  zIndex: 11,
  padding: spacing(4),
  width: "84px",
};

export const backdropStyles: CSSProperties = {
  transition: "width 300ms ease-in-out, opacity 300ms ease-in-out",
  width: "84px",
  height: "100%",
  top: 0,
  left: 0,
  bottom: 0,
  position: "fixed",
  zIndex: 10,
  background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent)",
};
