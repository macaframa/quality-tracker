import colors from "@/root/styles/colors";
import * as Styled from "./Tooltip.styled";
import { TooltipProps } from "./types";

function Tooltip({ children, title, ...rest }: TooltipProps) {
  return (
    <Styled.Tooltip
      title={title}
      componentsProps={{
        tooltip: {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundColor: "white",
            color: "black",
            border: `1px solid ${colors.neutralScale[100]}`,
            padding: "16px",
          },
        },
      }}
      {...rest}
    >
      {children}
    </Styled.Tooltip>
  );
}

export default Tooltip;
