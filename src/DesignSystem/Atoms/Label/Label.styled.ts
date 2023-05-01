import { LabelType } from "@/root/styles/types";
import styled from "styled-components";

export const Label = styled.div<{ $type: LabelType }>`
  ${({ theme, $type }) => theme.palette.label[$type]}
  ${({ theme }) => theme.fonts.xbold.lg}
  ${({ theme }) => `
    padding: ${theme.spacing.xxs}px ${theme.spacing.sm - theme.spacing.xxs}px;
  `}
  border-radius: 4px;
`;
