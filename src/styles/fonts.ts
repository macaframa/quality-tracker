import { SizesType, WeightType } from "./types";

const sizes = {
  xxs: 2,
  xs: 8,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 20,
  xxl: 30,
} as const;

const weights = {
  light: 300,
  regular: 400,
  bold: 500,
  xbold: 600,
} as const;

const lineHeights = {
  xxs: 6,
  xs: 12,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  xxl: 40,
} as const;

function font(size: SizesType, weight: WeightType = "regular") {
  return `
    font-size: ${sizes[size]}px;
    font-weight: ${weights[weight]};
    line-height: ${lineHeights[size]}px;
  `;
}

export default {
  xxs: font("xxs"),
  xs: font("xs"),
  sm: font("sm"),
  md: font("md"),
  lg: font("lg"),
  xl: font("xl"),
  xxl: font("xxl"),
  light: {
    xxs: font("xxs", "light"),
    xs: font("xs", "light"),
    sm: font("sm", "light"),
    md: font("md", "light"),
    lg: font("lg", "light"),
    xl: font("xl", "light"),
    xxl: font("xxl", "light"),
  },
  bold: {
    xxs: font("xxs", "bold"),
    xs: font("xs", "bold"),
    sm: font("sm", "bold"),
    md: font("md", "bold"),
    lg: font("lg", "bold"),
    xl: font("xl", "bold"),
    xxl: font("xxl", "bold"),
  },
  xbold: {
    xxs: font("xxs", "xbold"),
    xs: font("xs", "xbold"),
    sm: font("sm", "xbold"),
    md: font("md", "xbold"),
    lg: font("lg", "xbold"),
    xl: font("xl", "xbold"),
    xxl: font("xxl", "xbold"),
  },
};
