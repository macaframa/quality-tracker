export type FontsType = "body" | "label" | "button" | "heading" | "tag" | "subtext" | "status";
export type SizesType = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type WeightType = "light" | "regular" | "bold" | "xbold";
export type Importance = "primary" | "secondary" | "tertiary";
export type Severity = "success" | "info" | "warning" | "danger";
export type PositionType = "top" | "right" | "bottom" | "left";

export type AlertType = Exclude<Severity, "info" | "warning">;
export type ButtonType = Importance | Extract<Severity, "danger">;
export type ChipType = Exclude<Importance, "tertiary">;
export type LabelType = Exclude<Severity, "info">;
export type TagType = Exclude<Severity, "warning">;
