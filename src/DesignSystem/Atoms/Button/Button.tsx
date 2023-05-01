import React from "react";
import * as Styled from "./Button.styled";
import { ButtonProps } from "./types";

function Button({ children, onClick, type = "primary", ...rest }: ButtonProps) {
  return (
    <Styled.Button $type={type} onClick={onClick} {...rest}>
      {children}
    </Styled.Button>
  );
}

export default Button;
