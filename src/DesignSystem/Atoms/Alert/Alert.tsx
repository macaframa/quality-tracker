import React from "react";
import * as Styled from "./Alert.styled";
import { AlertProps } from "./types";
import { Check, Warning, X } from "@phosphor-icons/react";

function Alert({ children, onDismiss, onUndo, type, ...rest }: AlertProps) {
  return (
    <Styled.Alert $type={type} {...rest}>
      <Styled.StatusIconWrapper>
        {type === "success" ? <Check /> : <Warning />}
      </Styled.StatusIconWrapper>
      <Styled.AlertText>{children}</Styled.AlertText>
      {!!onUndo && <Styled.OnUndoText onClick={onUndo}>Undo</Styled.OnUndoText>}
      <X onClick={onDismiss} />
    </Styled.Alert>
  );
}

export default Alert;
