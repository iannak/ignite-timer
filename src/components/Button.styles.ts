import styled, { css } from 'styled-components';

export type ButtonVariant = 
| "primary"
| "secondary"
| "success"
| "danger"
| "warning"
| "info"
| "light"
| "dark";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  light: '#f8f9fa',
  dark: '#343a40'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 50px;

  ${props => {
    return css`background-color: ${buttonVariant[props.variant]};`
  }}
`;