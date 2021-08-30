// react
import React, { useEffect, useState } from 'react'

// modules
import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
// import { useAuth0 } from '@auth0/auth0-react'

// project files
import { altMenuOpen, currentPage, mainMenuOpen, navigationPages } from '../../state/recoil'
import { item, pages } from '../../state/recoil/types'
import { Button, SidebarItem } from '../00_atoms'
import { CloseIcon, MenuIcon } from '../00_atoms/icons'
import { NavItem } from '../01_molecules'
import Typography from '../00_atoms/Typography'
import theme from '../../styles/theme'

export const Sidebar = () => {
  const [open, setOpen] = useRecoilState(mainMenuOpen)

  const pageGroups = useRecoilValue(navigationPages)
  // const { user } = useAuth0()
  const iconStyle = {
    height: '60%',
    color: theme.palette.secondary.main,
    fill: theme.palette.secondary.main,
  }

  const handleMainMenuOpen = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <SideBar main mainOpen={open}>
      <SidebarItem isOpen={open}>
        {open ? (
          <TextContainer>
            <Typography component='h6' wrap={false} color='secondary'>
              Evidence Locker
            </Typography>
          </TextContainer>
        ) : null}
        <Button onClick={handleMainMenuOpen} size='medium' color='secondary'>
          {open ? <CloseIcon style={iconStyle} /> : <MenuIcon style={iconStyle} />}
        </Button>
      </SidebarItem>
      <SidebarItem isOpen={open}>
        <Logo src='/logo.png' alt='Agency Logo' open={open} />
        {open && (
          <TextContainer>
            <Typography component='body2' color='secondary'>
              {CLIENT_NAME}
            </Typography>
          </TextContainer>
        )}
      </SidebarItem>
      {pageGroups.map((group, index) => (
        <React.Fragment key={index}>
          <Divider />
          {open && (
            <TextContainer>
              <Typography component='body2' color='secondary'>
                {group.title}
              </Typography>
            </TextContainer>
          )}
          {group.pages.map((page) => (
            <NavItem key={page.id} data={page} />
          ))}
        </React.Fragment>
      ))}
    </SideBar>
  )
}
export const AltSidebar = () => {
  const mainOpen = useRecoilValue(mainMenuOpen)
  const altOpen = useRecoilValue(altMenuOpen)
  const pageGroups = useRecoilValue(navigationPages)
  const [page, setPage] = useRecoilState(currentPage)

  const [menuData, setMenuData] = useState<pages>(pageGroups[0])

  useEffect(() => {
    pageGroups.some((group) => {
      let buffer = group.pages.filter((item) => item.id === page.value)[0]
      if (buffer) {
        if (buffer.actionMenu) setMenuData(buffer.actionMenu)
        return true
      }
      return false
    })
  }, [page, pageGroups])

  const handleClick = (item: item) => {
    console.log(item)
    setPage({ title: item.label, value: item.id })
  }

  return (
    <AltSideBar mainOpen={mainOpen} altOpen={altOpen}>
      {menuData.title ? (
        <>
          <TextContainer justify='center' margin={true}>
            <Typography component='h6' color='primary'>
              {menuData.title}
            </Typography>
          </TextContainer>
          {menuData.pages.map((item) => (
            <MenuItem
              key={item.id}
              onClick={() => handleClick(item)}
              selected={page.value === item.id}
            >
              {item.label}
            </MenuItem>
          ))}
        </>
      ) : null}
    </AltSideBar>
  )
}

const CLIENT_NAME = process.env.REACT_APP_CLIENT_NAME

interface SidebarProps {
  main?: any
  mainOpen?: boolean
  altOpen?: boolean
}

const SideBar = styled.div<SidebarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ mainOpen }) => (mainOpen ? '300px' : '78px')};
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  padding: ${({ mainOpen }) => (mainOpen ? '1rem' : '1rem 0.4rem')};
  background-color: ${({ theme }) => theme.palette.primary.main};
  transition-property: width;
  transition-duration: ${(props) => `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) => props.theme.transitions.easing.easeInOut};
`
const AltSideBar = styled.div<SidebarProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  overflow-x: hidden;
  z-index: 80;
  display: flex;
  flex-flow: column nowrap;
  padding: 1rem;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  margin-left: ${({ mainOpen, altOpen }) => {
    const margins = ['300px', '78px', '8px', '-214px']
    if (mainOpen && altOpen) return margins[0]
    if (mainOpen && !altOpen) return margins[2]
    if (!mainOpen && altOpen) return margins[1]
    if (!mainOpen && !altOpen) return margins[3]
  }};
  box-shadow: 4px 0 20px hsl(0, 0%, 40%);
  transition-property: margin-left;
  transition-duration: ${(props) => `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) => props.theme.transitions.easing.easeInOut};
`
type ImgProps = { open: boolean }
const Logo = styled.img<ImgProps>`
  height: ${({ open }) => (open ? '3rem' : '3rem')};
  margin-right: ${({ open }) => (open ? '1rem' : '0')};
  border-radius: 50%;
  border: ${({ theme }) => `2px solid ${theme.palette.secondary.main}`};
`
type ContainerProps = {
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'even'
  items?: 'start' | 'end' | 'center'
  margin?: boolean
}
const TextContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 2rem;
  overflow: hidden;
  display: ${({ justify, items }) => (justify || items ? 'flex' : 'block')};
  justify-content: ${({ justify }) => {
    switch (justify) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      case 'between':
        return 'space-between'
      case 'around':
        return 'space-around'
      case 'even':
        return 'space-evenly'
      default:
        return 'flex-start'
    }
  }};
  align-items: ${({ justify }) => {
    switch (justify) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'center':
        return 'center'
      default:
        return 'flex-start'
    }
  }};
  margin-bottom: ${({ margin }) => (margin ? '1rem' : '0')};
`
const Divider = styled.div`
  height: 2px;
  width: 100%;
  border-bottom: 2px solid hsl(0, 0%, 7%);
  box-shadow: 0 4px 7px 1px hsl(0, 0%, 7%);
  margin: 1rem 0;
`
type MenuProps = { selected: boolean }
const MenuItem = styled.div<MenuProps>`
  height: 2rem;
  width: 284px;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: ${({ selected, theme }) => selected && theme.palette.common.white};
  cursor: pointer;

  &::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ selected, theme }) => selected && `12px 12px ${theme.palette.common.white}`};
  }
  &::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ selected, theme }) => selected && `12px -12px ${theme.palette.common.white}`};
  }

  &:hover::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ selected }) => !selected && `12px 12px hsl(205, 12%, 90%)`};
  }
  &:hover {
    background-color: ${({ selected }) => !selected && 'hsl(205, 12%, 90%)'};
  }
  &:hover::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: 0;
    border-radius: 50%;
    box-shadow: ${({ selected }) => !selected && `12px -12px hsl(205, 12%, 90%)`};
  }
`
