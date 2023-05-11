import { AlertType } from "@/root/styles/types";
import styled from "styled-components";

export const StatusIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AlertText = styled.div`
  overflow: hidden;
  max-height: 1.5rem;
  line-height: 1.5rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  white-space: nowrap;
`;

export const OnUndoText = styled.div`
  ${({ theme }) => theme.fonts.bold.lg}
  cursor: pointer;
`;

export const Alert = styled.div<{ $type: AlertType }>`
  ${({ $type, theme }) => theme.palette.alert[$type]}
  ${({ theme }) => theme.fonts.lg}
  ${({ theme }) => `
    padding: ${theme.spacing.sm - 2}px ${theme.spacing.sm}px;
  `}
  ${StatusIconWrapper} {
    svg {
      fill: ${({ $type, theme }) =>
        $type === "success" ? theme.colors.green[700] : theme.colors.red[700]};
      stroke: ${({ $type, theme }) =>
        $type === "success" ? theme.colors.green[700] : theme.colors.red[700]};
    }
  }
  display: flex;
  flex-grow: 1;
  gap: 16px;
  align-items: center;
  width: -webkit-fill-available;
  border-radius: 4px;
`;
