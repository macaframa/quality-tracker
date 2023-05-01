import colors from "./colors";

export default {
  alert: {
    success: `
      background-color: ${colors.green[50]};
      color: ${colors.neutralScale[800]};
      border: 1px solid ${colors.green[700]};
      svg {
        min-width: 16px;
        cursor: pointer;
      }
    `,
    danger: `
      background-color: ${colors.red[100]};
      color: ${colors.neutralScale[800]};
      border: 1px solid ${colors.red[700]};
      svg {
        min-width: 16px;
        cursor: pointer;
      }
    `,
  },
  button: {
    primary: `
      background-color: ${colors.green[700]};
      color: ${colors.white};
      border: 1.5px solid transparent;
      box-shadow: 0px 2px 0px 0px ${colors.green[800]};
      &:hover {
        background-color: ${colors.green[600]};
        &:active {
          background-color: ${colors.green[800]};
          transform: translateY(2px);
          box-shadow: unset;
        }
      }
    `,
    secondary: `
      background-color: ${colors.neutralScale[200]};
      color: ${colors.neutralScale[500]};
      border: 1.5px solid transparent;
      box-shadow: 0px 2px 0px 0px ${colors.neutralScale[300]};
      &:hover {
        background-color: ${colors.neutralScale[100]};
        &:active {
          background-color: ${colors.neutralScale[300]};
          transform: translateY(2px);
          box-shadow: unset;
        }
      }
    `,
    tertiary: `
      background-color: ${colors.white};
      color: ${colors.green[700]};
      border: 1.5px solid transparent;
      &:hover:active {
        transform: translateY(2px);
      }
    `,
    danger: `
      background-color: ${colors.red[500]};
      color: ${colors.white};
      border: 1.5px solid transparent;
      box-shadow: 0px 2px 0px 0px ${colors.red[600]};
      &:hover {
        background-color: ${colors.red[400]};
        &:active {
          background-color: ${colors.red[600]};
          transform: translateY(2px);
          box-shadow: unset;
        }
      }
    `,
  },
  chip: {
    primary: `
      background-color: ${colors.green[50]};
      color: ${colors.green[900]};
    `,
    secondary: `
      background-color: ${colors.neutralScale[100]};
      color: ${colors.neutralScale[800]};
    `,
  },
  label: {
    success: `
      background-color: ${colors.green[50]};
      color: ${colors.green[900]};
    `,
    warning: `
      background-color: ${colors.yellow[100]};
      color: ${colors.yellow[600]};
    `,
    danger: `
      background-color: ${colors.red[50]};
      color: ${colors.red[800]};
    `,
  },
  tag: {
    success: `
      background-color: ${colors.green[700]};
      color: ${colors.white};
    `,
    info: `
      background-color: ${colors.neutralScale[800]};
      color: ${colors.white};
    `,
    danger: `
      background-color: ${colors.red[600]};
      color: ${colors.white};
    `,
  },
} as const;
