import { ButtonProps } from "@/root/DesignSystem/Atoms/Button/types";

export type IconButtonType = "outlined" | "filled" | "unstyled";

export interface IconButtonProps extends ButtonProps {
  iconButtonType: IconButtonType;
}
