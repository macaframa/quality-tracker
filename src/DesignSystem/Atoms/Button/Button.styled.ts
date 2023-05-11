import styled from "styled-components";
import { ButtonSeverityType } from "@/root/styles/types";

export const Button = styled.button<{ $severity: ButtonSeverityType }>`
  ${({ theme, $severity }) => theme.palette.button[$severity]}
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
