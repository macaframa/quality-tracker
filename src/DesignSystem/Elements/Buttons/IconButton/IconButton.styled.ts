import { Button } from "@/root/DesignSystem/Atoms/Button/Button.styled";
import styled from "styled-components";

export const IconButton = styled(Button)<{ $outlined: boolean }>`
  ${({ theme, $outlined }) =>
    $outlined &&
    `
    border: 1px solid ${theme.colors.green[700]};
  `}
  padding: 6px 12px;
`;
