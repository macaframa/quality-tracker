import { KeyboardEvent, MouseEvent, useCallback, useState } from "react";
import * as Styled from "./RadioGroup.styled";
import { RadioGroupProps } from "./types";
import { useFormikContext } from "formik";

function RadioGroup({ label, name, options, ...rest }: RadioGroupProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const formikContext = useFormikContext();

  const updateSelected = useCallback(
    (option: string | null) => {
      setSelected(option);
      formikContext.setFieldValue(name, option);
    },
    [setSelected]
  );

  return (
    <Styled.RadioGroup
      tabIndex={0}
      role="group"
      aria-labelledby={`${name}-radio-group`}
      {...rest}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === "Backspace") updateSelected(null);
      }}
    >
      {label}
      {options.map((option, key) => (
        <Styled.Radio key={`${option}-${key}`}>
          <Styled.RadioIconContainer>
            <Styled.RadioIcon $selected={selected === option} />
            <Styled.RadioField
              onChange={(e: MouseEvent<HTMLInputElement>) => {
                e.preventDefault();
                updateSelected(option);
              }}
              selected={selected === option}
              type="radio"
              name={name}
              value={option}
            />
          </Styled.RadioIconContainer>
          <Styled.RadioLabel>{option}</Styled.RadioLabel>
        </Styled.Radio>
      ))}
    </Styled.RadioGroup>
  );
}

export default RadioGroup;
