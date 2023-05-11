import { Input } from "@/root/DesignSystem/Atoms";
import * as Styled from "./NumberInput.styled";
import { ChangeEvent, useCallback, useState } from "react";
import { NumberInputProps } from "./types";
import { useFormikContext } from "formik";

function NumberInput({ children, name, value, ...rest }: NumberInputProps) {
  const [controlledValue, setControlledValue] = useState(value ?? 0);
  const FormikContext = useFormikContext();

  const updateValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (Number.isNaN(parseInt(e.currentTarget.value)) || !e.currentTarget.value) {
        setControlledValue(0);
        FormikContext.setFieldValue(name, 0);
        return;
      }
      setControlledValue(parseInt(e.currentTarget.value) ?? 0);
      FormikContext.setFieldValue(name, parseInt(e.currentTarget.value) ?? 0);
    },
    [setControlledValue]
  );

  return (
    <Styled.NumberInput aria-label={name} {...rest}>
      {children}
      <Input name={name} type="number" onChange={updateValue} value={controlledValue} />
    </Styled.NumberInput>
  );
}

export default NumberInput;
