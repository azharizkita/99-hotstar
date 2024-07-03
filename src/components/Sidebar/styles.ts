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
