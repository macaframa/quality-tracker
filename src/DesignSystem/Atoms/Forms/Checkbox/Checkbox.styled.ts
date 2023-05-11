import styled from "styled-components";

export const CheckIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green[700]};
`;

export const CheckIconContainer = styled.div<{ $checked: boolean }>`
  height: 16px;
  width: 16px;
  border: 2px solid ${({ theme }) => theme.colors.neutralScale[300]};
  ${({ theme, $checked }) =>
    $checked &&
    `
    border: 2px solid ${theme.colors.green[700]};
      ${CheckIcon} {
        display: flex;
      }
  `}
  border-radius: 2px;
`;

export const Text = styled.div``;

export const SubText = styled.div`
  ${({ theme }) => theme.fonts.sm}
  color: ${({ theme }) => theme.colors.neutralScale[400]};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;
