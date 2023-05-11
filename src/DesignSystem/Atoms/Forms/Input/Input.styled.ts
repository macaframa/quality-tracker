import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  ${({ theme }) => theme.fonts.md}
  ${({ theme }) => `
    border: 1px solid ${theme.colors.neutralScale[500]};
    border-radius: ${theme.spacing.xs - theme.spacing.xxs}px;
    padding: 0px ${theme.spacing.xs + theme.spacing.xxs}px;
  `}
  height: 35px;
  &:focus-visible {
    outline: none;
  }
`;
