import { AlertType } from "@/root/styles/types";
import { PropsWithChildren } from "react";

export interface AlertProps extends PropsWithChildren {
  type: AlertType;
  onDismiss: () => void;
  onUndo?: () => void;
}
