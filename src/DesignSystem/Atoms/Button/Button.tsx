import React from "react";
import * as Styled from "./Button.styled";
import { ButtonProps } from "./types";

function Button({ children, severity = "primary", ...rest }: ButtonProps) {
  return (
    <Styled.Button $severity={severity} {...rest}>
      {children}
    </Styled.Button>
  );
}

export default Button;
