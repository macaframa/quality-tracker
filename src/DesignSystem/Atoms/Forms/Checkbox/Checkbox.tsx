import { Check } from "@phosphor-icons/react";
import * as Styled from "./Checkbox.styled";
import { CheckboxProps } from "./types";

function Checkbox({ checked, id, label, onClick, subText, ...rest }: CheckboxProps) {
  return (
    <Styled.Checkbox onClick={() => onClick({ checked, id, label, subText })} {...rest}>
      <Styled.CheckIconContainer $checked={checked}>
        <Styled.CheckIcon>
          <Check color="white" weight="bold" />
        </Styled.CheckIcon>
      </Styled.CheckIconContainer>
      <Styled.TextContainer>
        <Styled.Text>{label}</Styled.Text>
        <Styled.SubText>{subText}</Styled.SubText>
      </Styled.TextContainer>
    </Styled.Checkbox>
  );
}

export default Checkbox;
