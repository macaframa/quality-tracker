import * as Styled from "./Input.styled";
import { InputProps } from "./types";

function Input({ name, value, ...rest }: InputProps) {
  return <Styled.Input value={value} name={name} {...rest} />;
}

export default Input;
