import { useEffect, useRef, useState } from "react";
import { Check, Warning, X } from "@phosphor-icons/react";
import Tooltip from "../Tooltip/Tooltip";
import * as Styled from "./Alert.styled";
import { AlertProps } from "./types";

function Alert({ children, onDismiss, onUndo, type, ...rest }: AlertProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // @ts-expect-error
    if (ref.current?.offsetWidth < ref.current?.scrollWidth) {
      setShowTooltip(true);
    }
  }, [ref.current]);

  return (
    <Styled.Alert $type={type} {...rest}>
      <Styled.StatusIconWrapper>
        {type === "success" ? <Check /> : <Warning />}
      </Styled.StatusIconWrapper>
      {showTooltip ? (
        <Tooltip placement="top-start" title={<>{children}</>}>
          <Styled.AlertText ref={ref}>{children}</Styled.AlertText>
        </Tooltip>
      ) : (
        <Styled.AlertText ref={ref}>{children}</Styled.AlertText>
      )}
      {!!onUndo && (
        <Styled.OnUndoText
          onClick={() => {
            onUndo();
            onDismiss();
          }}
        >
          Undo
        </Styled.OnUndoText>
      )}
      <X onClick={onDismiss} />
    </Styled.Alert>
  );
}

export default Alert;
