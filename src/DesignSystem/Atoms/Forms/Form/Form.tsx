import * as Styled from "./Form.styled";
import { FormProps } from "./types";

function Form({ children, ...rest }: FormProps) {
  return <Styled.Form {...rest}>{children}</Styled.Form>;
}

export default Form;
