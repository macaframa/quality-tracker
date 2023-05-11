export type CheckboxOption = { checked: boolean; id: number; label: string; subText?: string };

export interface CheckboxProps {
  checked: boolean;
  id: number;
  label: string;
  onClick: (option: CheckboxOption) => void;
  subText?: string;
}
