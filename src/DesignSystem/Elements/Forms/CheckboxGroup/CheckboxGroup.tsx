import { useCallback, useEffect, useState } from "react";
import * as Styled from "./CheckboxGroup.styled";
import { Checkbox } from "@/root/DesignSystem/Atoms";
import { CheckboxGroupProps } from "./types";
import { CheckboxOption } from "@/root/DesignSystem/Atoms/Forms/Checkbox/types";
import { useFormikContext } from "formik";

function CheckboxGroup({ label, name, options, ...rest }: CheckboxGroupProps) {
  const [controlledOptions, setControlledOptions] = useState<CheckboxOption[]>(options);
  const FormikContext = useFormikContext();

  const updateControlledOptions = useCallback(
    (option: CheckboxOption) => {
      setControlledOptions((controlledOptions) => {
        return controlledOptions.map((controlledOption) => {
          if (controlledOption.id === option.id)
            return { ...controlledOption, checked: !controlledOption.checked };
          return controlledOption;
        });
      });
    },
    [setControlledOptions]
  );

  useEffect(() => {
    FormikContext.setFieldValue(
      name,
      controlledOptions
        .filter((controlledOption) => controlledOption.checked)
        .map((controlledOption) => controlledOption.label)
    );
  }, [controlledOptions]);

  return (
    <Styled.CheckboxGroup {...rest}>
      {label}
      {controlledOptions.map((option) => (
        <Checkbox key={`${name}-${option.label}`} {...option} onClick={updateControlledOptions} />
      ))}
    </Styled.CheckboxGroup>
  );
}

export default CheckboxGroup;
