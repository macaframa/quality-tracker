import React from "react";
import * as Styled from "./Tag.styled";
import { TagProps } from "./types";

function Tag({ children, type = "info", ...rest }: TagProps) {
  return (
    <Styled.Tag $type={type} {...rest}>
      {children}
    </Styled.Tag>
  );
}

export default Tag;
