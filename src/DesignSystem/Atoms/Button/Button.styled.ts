import styled from "styled-components";
import { ButtonType } from "@/root/styles/types";

export const Button = styled.button<{ $type: ButtonType }>`
  ${({ theme, $type }) => theme.palette.button[$type]}
  ${({ theme }) => theme.fonts.bold.lg}
  ${({ theme }) => `
    padding: ${theme.spacing.xs}px ${theme.spacing.xl}px;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
`;
