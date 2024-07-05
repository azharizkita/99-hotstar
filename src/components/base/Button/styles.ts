import { spacing } from "@/styles/utils";
import { CSSProperties } from "react";

export const buttonStyles: CSSProperties = {
  padding: spacing(3),
  borderRadius: spacing(3),
  border: "none",
  cursor: "pointer",
  fontWeight: "bold",
  color: "whitesmoke",
  transition: "all 300ms ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
