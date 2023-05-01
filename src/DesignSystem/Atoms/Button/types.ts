import { PropsWithChildren } from "react";
import { ButtonType } from "@/root/styles/types";

export interface ButtonProps extends PropsWithChildren {
  "data-testid"?: string;
  onClick: () => void;
  type: ButtonType;
}
