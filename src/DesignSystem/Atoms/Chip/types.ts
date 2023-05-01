import { PropsWithChildren } from "react";
import { ChipType } from "@/root/styles/types";

export interface ChipProps extends PropsWithChildren {
  "data-testid"?: string;
  onClick?: () => void;
  type: ChipType;
}
