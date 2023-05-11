import * as Styled from "./IconButton.styled";
import { IconButtonProps } from "./types";

function IconButton({ children, outlined, ...rest }: IconButtonProps) {
  return (
    <Styled.IconButton $outlined={!!outlined} $severity="tertiary" {...rest}>
      {children}
    </Styled.IconButton>
  );
}

export default IconButton;
