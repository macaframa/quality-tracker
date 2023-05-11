import { IntRange } from "@/root/styles/types";

export interface CounterProps {
  children: string;
  "data-testid"?: string;
  max?: IntRange<1, 100>;
  name: string;
  value?: number;
}
