import { ChipType } from "@/root/styles/types";
import styled from "styled-components";

export const Chip = styled.div<{ $type: ChipType; $clickable: boolean }>`
  ${({ theme, $type }) => theme.palette.chip[$type]}
  ${({ theme }) => theme.fonts.lg}
  ${({ theme }) => `
    padding: ${theme.spacing.xs}px ${theme.spacing.xs + theme.spacing.xxs}px;
  `}
  ${({ $clickable }) => $clickable && `cursor: pointer;`}
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 4px;
  cursor: pointer;
`;
