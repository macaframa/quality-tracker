import styled from "styled-components";
import { TagType } from "@/root/styles/types";

export const Tag = styled.div<{ $type: TagType }>`
  ${({ theme, $type }) => theme.palette.tag[$type]}
  ${({ theme }) => theme.fonts.xbold.lg}
  ${({ theme }) => `
    padding: 0px ${theme.spacing.sm - 2}px;
    height: ${theme.spacing.lg}px;
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
