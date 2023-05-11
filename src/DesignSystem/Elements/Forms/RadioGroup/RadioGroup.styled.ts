import styled from "styled-components";
import { Field } from "formik";

export const RadioIcon = styled.div<{ $selected: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme, $selected }) =>
    $selected &&
    `
      background-color: ${theme.colors.green[700]};
  `}
  z-index: 2;
`;

export const RadioIconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  border: 2px solid ${({ theme }) => theme.colors.green[700]};
  border-radius: 16px;
`;

export const RadioField = styled(Field)`
  visibility: hidden;
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  margin: 0px;
  z-index: 1;
`;

export const RadioLabel = styled.span`
  ${({ theme }) => theme.fonts.lg}
  text-align: middle;
`;

export const Radio = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  &:focus-visible {
    outline: none;
  }
`;
