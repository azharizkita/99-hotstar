import { CSSProperties } from "react";

/**
 * Provides a consistent spacing value
 *
 * @param factor number
 * @returns `${factor * 4}px`
 */
export const spacing = (factor: number) => `${factor * 4}px`;

/**
 * Provides a consistent content padding
 *
 * @param factor number
 * @returns `${factor * 4}px`
 */
export const contentSafeAreaStyles: CSSProperties = {
  padding: spacing(8),
  paddingLeft: spacing(21),
};
