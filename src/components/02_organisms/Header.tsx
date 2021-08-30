// react
import React, { useEffect, useState } from 'react'

// modules
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

// project files
import { altMenuOpen, currentPage, mainMenuOpen } from '../../state/recoil'
import { AuthButton, Typography } from '../00_atoms'

export const Header = () => {
  const mainOpen = useRecoilValue(mainMenuOpen)
  const altOpen = useRecoilValue(altMenuOpen)
  const page = useRecoilValue(currentPage)
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    setPageTitle(page.title)
  }, [page])

  return (
    <Head mainOpen={mainOpen} altOpen={altOpen}>
      <Typography component='h5' color='primary'>
        {pageTitle}
      </Typography>
      <AuthButton mode='logout' />
    </Head>
  )
}

interface PageProps {
  mainOpen: boolean
  altOpen: boolean
}
const Head = styled.div<PageProps>`
  height: 4rem;
  width: ${({ mainOpen, altOpen }) => {
    const margins = ['600px', '378px', '308px', '86px']
    let width = ''

    if (mainOpen && altOpen) width = margins[0]
    if (mainOpen && !altOpen) width = margins[2]
    if (!mainOpen && altOpen) width = margins[1]
    if (!mainOpen && !altOpen) width = margins[3]

    return `calc(100% - ${width})`
  }};
  z-index: 60;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.default};
  margin-left: ${({ mainOpen, altOpen }) => {
    const margins = ['600px', '378px', '308px', '86px']

    if (mainOpen && altOpen) return margins[0]
    if (mainOpen && !altOpen) return margins[2]
    if (!mainOpen && altOpen) return margins[1]
    if (!mainOpen && !altOpen) return margins[3]
  }};
  padding: 0 1rem;
  transition-property: all;
  transition-duration: ${(props) => `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) => props.theme.transitions.easing.easeInOut};
`
