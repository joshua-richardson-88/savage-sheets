// react
import React from 'react'

// modules
import styled from 'styled-components'

// project files

interface Props {
  children: React.ReactNode
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body1' | 'body2'
  color: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'
  wrap?: boolean
}
export default function Typography({ children, component = 'body1', color = 'primary' }: Props) {
  switch (component) {
    case 'h1':
      return <H1 color={color}>{children}</H1>
    case 'h2':
      return <H2 color={color}>{children}</H2>
    case 'h3':
      return <H3 color={color}>{children}</H3>
    case 'h4':
      return <H4 color={color}>{children}</H4>
    case 'h5':
      return <H5 color={color}>{children}</H5>
    case 'h6':
      return <H6 color={color}>{children}</H6>
    case 'body1':
      return <Body1 color={color}>{children}</Body1>
    case 'body2':
      return <Body2 color={color}>{children}</Body2>
    case 'subtitle':
      return <Subtitle color={color}>{children}</Subtitle>
  }
}

type StyledProps = { color: string }
const H1 = styled.h1<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.h1.fontWeight};
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h1.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const H2 = styled.h2<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h2.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const H3 = styled.h3<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.h3.fontWeight};
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h3.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const H4 = styled.h4<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  line-height: ${({ theme }) => theme.typography.h4.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h4.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const H5 = styled.h5<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  line-height: ${({ theme }) => theme.typography.h5.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h5.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const H6 = styled.h6<StyledProps>`
  overflow: hidden;
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  line-height: ${({ theme }) => theme.typography.h6.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.h6.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const Body1 = styled.p<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.body1.fontWeight};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body1.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const Body2 = styled.p<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.body2.fontWeight};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body2.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
const Subtitle = styled.p<StyledProps>`
  font-weight: ${({ theme }) => theme.typography.subtitle.fontWeight};
  font-size: ${({ theme }) => theme.typography.subtitle.fontSize};
  line-height: ${({ theme }) => theme.typography.subtitle.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.subtitle.letterSpacing};
  color: ${({ color, theme }) => {
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
    }
  }};
`
