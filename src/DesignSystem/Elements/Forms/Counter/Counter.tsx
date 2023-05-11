import { useCallback, useState } from "react";
import { Minus, Plus } from "@phosphor-icons/react";
import * as Styled from "./Counter.styled";
import { CounterProps } from "./types";
import { useFormikContext } from "formik";

function Counter({ children, max, name, value, ...rest }: CounterProps) {
  const [count, setCount] = useState(value ?? 0);
  const FormikContext = useFormikContext();

  const updateCount = useCallback(
    (v: number) => {
      setCount(v ?? 0);
      FormikContext.setFieldValue(name, v);
    },
    [setCount]
  );

  return (
    <Styled.Counter {...rest}>
      {children}
      <Styled.IconWrapper style={{ marginLeft: "auto" }}>
        <Plus onClick={() => updateCount(max ? (count >= max ? count : count + 1) : count + 1)} />
      </Styled.IconWrapper>
      <Styled.CounterPresentation>{count}</Styled.CounterPresentation>
      <Styled.IconWrapper>
        <Minus onClick={() => updateCount(count < 1 ? 0 : count - 1)} />
      </Styled.IconWrapper>
    </Styled.Counter>
  );
}

export default Counter;
