import React from "react";
import * as Styled from "./Label.styled";
import { LabelProps } from "./types";

function Label({ children, type, ...rest }: LabelProps) {
  return (
    <Styled.Label $type={type} {...rest}>
      {children}
    </Styled.Label>
  );
}

export default Label;
