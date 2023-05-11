import * as Styled from "./Switch.styled";
import { SwitchProps } from "./types";

function Switch({ on, onClick, ...rest }: SwitchProps) {
  return (
    <Styled.Switch $on={on} onClick={onClick} {...rest}>
      <Styled.SwitchIcon />
    </Styled.Switch>
  );
}

export default Switch;
