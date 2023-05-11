import { ReactNode } from "react";

export interface IconButtonProps {
  children: ReactNode;
  outlined?: boolean;
  onClick?: () => void;
}
