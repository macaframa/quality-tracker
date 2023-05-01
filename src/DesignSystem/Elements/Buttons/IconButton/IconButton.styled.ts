import { Button } from "@/root/DesignSystem/Atoms";
import styled from "styled-components";
import { IconButtonType } from "./types";

export const IconButton = styled(Button)<{ $type: IconButtonType }>`
  border: 1px solid transparent;
  ${({ theme }) => `
    svg {
      stroke: ${theme.colors.neutralScale[500]};
    }
  `}
  ${({ $type, theme }) =>
    $type === "outlined" &&
    `
      border: 1px solid ${theme.colors.neutralScale[200]};
  `}
  ${({ $type, theme }) =>
    $type === "unstyled" &&
    `
    svg {
      stroke: ${theme.colors.neutralScale[200]};
    }
  `}
`;
