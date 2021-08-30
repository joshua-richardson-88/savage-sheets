// react
import React from 'react'

// modules
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

// project files
import { altMenuOpen, mainMenuOpen } from '../../state/recoil'

export const Content = () => {
  const mainOpen = useRecoilValue(mainMenuOpen)
  const altOpen = useRecoilValue(altMenuOpen)

  return <Body mainOpen={mainOpen} altOpen={altOpen} />
}

interface PageProps {
  mainOpen: boolean
  altOpen: boolean
}
const Body = styled.div<PageProps>`
  height: 100%;
  width: 100%;
  z-index: 60;
  background-color: ${(props) => props.theme.palette.background.paper};
  margin-left: ${({ mainOpen, altOpen }) => {
    const margins = ['600px', '378px', '308px', '86px']

    if (mainOpen && altOpen) return margins[0]
    if (mainOpen && !altOpen) return margins[2]
    if (!mainOpen && altOpen) return margins[1]
    if (!mainOpen && !altOpen) return margins[3]
  }};
  transition-property: margin-left;
  transition-duration: ${(props) =>
    `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) =>
    props.theme.transitions.easing.easeInOut};
`
