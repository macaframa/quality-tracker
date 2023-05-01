import React from "react";
import * as Styled from "./Chip.styled";
import { ChipProps } from "./types";

function Chip({ children, type, onClick, ...rest }: ChipProps) {
  return (
    <Styled.Chip $type={type} $clickable={!!onClick} {...rest}>
      {children}
    </Styled.Chip>
  );
}

export default Chip;
