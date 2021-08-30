// react
import React from 'react'

// modules
import styled from 'styled-components'

interface ButtonProps {
  color?: ColorOptions
  size: Size
  variant: Variant
}
interface Props {
  onClick: () => void
  variant?: Variant
  size?: Size
  color?: ColorOptions
  children: React.ReactNode
}
type ColorOptions =
  | 'error'
  | 'info'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | string
type Size = 'small' | 'medium' | 'large'
type Variant = 'contained' | 'outlined' | 'blank'

const StyledButton = styled.button<ButtonProps>`
  height: ${({ size }) => {
    if (size === 'small') return '1.5rem'
    if (size === 'medium') return '2rem'
    return '2.5rem'
  }};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: ${({ variant }) => (variant === 'outlined' ? 'solid' : 'none')};
  border-color: ${({ variant, theme, color }) => {
    if (variant === 'blank' || variant === 'contained') return 'transparent'
    if (variant === 'outlined') {
      switch (color) {
        case 'error':
          return theme.palette.error.main
        case 'info':
          return theme.palette.info.main
        case 'primary':
          return theme.palette.primary.main
        case 'secondary':
          return theme.palette.secondary.main
        case 'success':
          return theme.palette.success.main
        case 'warning':
          return theme.palette.warning.main
        default:
          return color
      }
    }
  }};
  border-radius: 2px;
  background-color: ${({ variant, theme, color }) => {
    if (variant === 'blank' || variant === 'outlined') return 'transparent'
    if (variant === 'contained') {
      switch (color) {
        case 'error':
          return theme.palette.error.main
        case 'info':
          return theme.palette.info.main
        case 'primary':
          return theme.palette.primary.main
        case 'secondary':
          return theme.palette.secondary.main
        case 'success':
          return theme.palette.success.main
        case 'warning':
          return theme.palette.warning.main
        default:
          return color
      }
    }
  }};
  color: ${({ variant, theme, color }) => {
    if (variant === 'contained') {
      switch (color) {
        case 'error':
          return theme.palette.error.contrastText
        case 'info':
          return theme.palette.info.contrastText
        case 'primary':
          return theme.palette.primary.contrastText
        case 'secondary':
          return theme.palette.secondary.contrastText
        case 'success':
          return theme.palette.success.contrastText
        case 'warning':
          return theme.palette.warning.contrastText
        default:
          return color
      }
    }
    return theme.palette.primary.contrastText
  }};
  font-weight: ${({ theme }) => theme.typography.button.fontWeight};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  line-height: ${({ theme }) => theme.typography.button.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.button.letterSpacing};
  text-transform: ${({ theme }) => theme.typography.button.textTransform};
  padding: 0.2rem 0.5rem;
  cursor: pointer;

  &:hover::before {
    display: block;
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    background-color: hsla(0, 0%, 0%, 0.3);
  }
`

export default function Button({
  onClick,
  variant = 'blank',
  size = 'medium',
  color = 'primary',
  children,
}: Props) {
  return (
    <StyledButton onClick={onClick} size={size} variant={variant} color={color}>
      {children}
    </StyledButton>
  )
}
