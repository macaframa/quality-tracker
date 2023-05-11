import { InputProps } from "@/root/DesignSystem/Atoms/Forms/Input/types";

export interface TextInputProps extends InputProps {
  value?: string;
  children: string;
}
