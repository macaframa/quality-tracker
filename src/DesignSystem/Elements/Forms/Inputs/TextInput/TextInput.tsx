import { Input } from "@/root/DesignSystem/Atoms";
import * as Styled from "./TextInput.styled";
import { ChangeEvent, useCallback, useState } from "react";
import { TextInputProps } from "./types";
import { useFormikContext } from "formik";

function TextInput({ children, name, value, ...rest }: TextInputProps) {
  const [controlledValue, setControlledValue] = useState(value ?? "");
  const FormikContext = useFormikContext();

  const updateValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setControlledValue(e.currentTarget.value);
      FormikContext.setFieldValue(name, e.currentTarget.value);
    },
    [setControlledValue]
  );

  return (
    <Styled.TextInput aria-label={name} {...rest}>
      {children}
      <Input name={name} type="text" onChange={updateValue} value={controlledValue} />
    </Styled.TextInput>
  );
}

export default TextInput;
