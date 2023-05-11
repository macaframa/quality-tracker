import styled from "styled-components";

export const SwitchIcon = styled.div`
  height: 12px;
  width: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
`;

export const Switch = styled.div<{ $on: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 16px;
  width: 28px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.neutralScale[500]};
  padding: 2px;
  cursor: pointer;
  transition: justify-content 1s ease-in-out;
  ${({ theme, $on }) =>
    $on &&
    `
    justify-content: flex-end;
    background-color: ${theme.colors.green[700]};
  `}
`;
