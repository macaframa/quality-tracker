import { PropsWithChildren } from "react";
import { TagType } from "@/root/styles/types";

export interface TagProps extends PropsWithChildren {
  "data-testid"?: string;
  type: TagType;
}
