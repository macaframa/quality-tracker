import { ButtonSeverityType } from "@/root/styles/types";
import { ButtonProps as buttonProps } from "@mui/base";

export interface ButtonProps extends buttonProps {
  "data-testid"?: string;
  onClick?: () => void;
  severity: ButtonSeverityType;
}
