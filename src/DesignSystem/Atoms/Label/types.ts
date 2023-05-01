import { PropsWithChildren } from "react";
import { LabelType } from "@/root/styles/types";

export interface LabelProps extends PropsWithChildren {
  "data-testid"?: string;
  type: LabelType;
}
