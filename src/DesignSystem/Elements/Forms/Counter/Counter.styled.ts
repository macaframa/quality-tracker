import styled from "styled-components";

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralScale[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  padding: 2px;
  cursor: pointer;
`;

export const CounterPresentation = styled.div`
  ${({ theme }) => theme.fonts.lg}
  min-width: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;
