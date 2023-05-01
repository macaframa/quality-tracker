import colors from "./colors";
import fonts from "./fonts";
import palette from "./palette";
import spacing from "./spacing";

export * from "./colors";
export * from "./fonts";
export * from "./spacing";

export const Theme = {
  colors,
  fonts,
  palette,
  spacing,
} as const;
