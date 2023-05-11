import { ChangeEvent } from "react";

export interface InputProps {
  "data-testid"?: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}
