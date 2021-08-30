// react
import React, { useEffect, useState } from 'react'

// modules
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

// project files
import {
  BriefcaseIcon,
  CloudUploadIcon,
  FilmIcon,
  HomeIcon,
  PencilIcon,
  ReportsIcon,
  SearchIcon,
  SettingsIcon,
  VideoCameraIcon,
} from '../00_atoms/icons'
import { altMenuOpen, mainMenuOpen, currentPage } from '../../state/recoil'
import { item } from '../../state/recoil/types'
import theme from '../../styles/theme'
import { Typography } from '../00_atoms'

interface Props {
  data: item
}
export default function NavItem({ data: { id, label, alt, actionMenu } }: Props) {
  const [selected, setSelected] = useRecoilState(currentPage)
  const setAltOpen = useSetRecoilState(altMenuOpen)
  const [isOpen, setMainOpen] = useRecoilState(mainMenuOpen)
  const [icon, setIcon] = useState<React.ReactNode>(null)

  useEffect(() => {
    const iconStyle = {
      height: '60%',
      color: 'transparent',
      fill: selected.value === id ? theme.palette.primary.main : theme.palette.secondary.main,
    }
    switch (alt) {
      case 'Dashboard':
        setIcon(<HomeIcon style={iconStyle} />)
        break
      case 'Edit':
        setIcon(<PencilIcon style={iconStyle} />)
        break
      case 'Monitoring':
        setIcon(<BriefcaseIcon style={iconStyle} />)
        break
      case 'Record':
        setIcon(<VideoCameraIcon style={iconStyle} />)
        break
      case 'Reports':
        setIcon(<ReportsIcon style={iconStyle} />)
        break
      case 'Search':
        setIcon(<SearchIcon style={iconStyle} />)
        break
      case 'Settings':
        setIcon(<SettingsIcon style={iconStyle} />)
        break
      case 'Upload':
        setIcon(<CloudUploadIcon style={iconStyle} />)
        break
      case 'View Live':
        setIcon(<FilmIcon style={iconStyle} />)
        break
    }
  }, [alt, selected, id])

  const handleNavClick = () => {
    setSelected({ value: id, title: label })
    setMainOpen(actionMenu ? false : true)
    setAltOpen(actionMenu ? true : false)
  }

  return (
    <Root isOpen={isOpen} selected={selected.value === id} onClick={handleNavClick}>
      {icon}
      {isOpen && (
        <TextContainer>
          <Typography component='body1' color={selected.value === id ? 'primary' : 'secondary'}>
            {label}
          </Typography>
        </TextContainer>
      )}
    </Root>
  )
}

type RootProps = { isOpen: boolean; selected: boolean }
const Root = styled.div<RootProps>`
  height: 3rem;
  width: ${({ isOpen }) => (isOpen ? '300px' : '78px')};
  position: relative;
  z-index: ${({ selected }) => (selected ? '70' : '60')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.25rem 0;
  margin-left: ${({ isOpen }) => (isOpen ? '2rem' : '0.5rem')};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding-left: ${({ isOpen }) => (isOpen ? '1rem' : '0.8rem')};
  background-color: ${({ selected, theme }) => selected && theme.palette.secondary.main};
  color: ${({ selected, theme }) =>
    selected ? theme.palette.primary.main : theme.palette.secondary.main};
  cursor: ${({ selected }) => !selected && 'pointer'};
  transition-property: width;
  transition-duration: ${(props) => `${props.theme.transitions.duration.standard}ms`};
  transition-timing-function: ${(props) => props.theme.transitions.easing.easeInOut};

  &::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: ${({ isOpen }) => (isOpen ? '48px' : '14px')};
    border-radius: 50%;
    box-shadow: ${({ selected, theme }) => selected && `12px 12px ${theme.palette.secondary.main}`};
  }
  &::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: ${({ isOpen }) => (isOpen ? '48px' : '14px')};
    border-radius: 50%;
    box-shadow: ${({ selected, theme }) =>
      selected && `12px -12px ${theme.palette.secondary.main}`};
  }

  &:hover::before {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    top: -1.7rem;
    right: ${({ isOpen }) => (isOpen ? '48px' : '14px')};
    border-radius: 50%;
    box-shadow: ${({ selected }) => !selected && '12px 12px hsl(0, 0%, 15%)'};
  }
  &:hover {
    background-color: ${({ selected }) => !selected && 'hsl(0, 0%, 15%)'};
  }
  &:hover::after {
    content: '';
    height: 1.7rem;
    width: 1.7rem;
    position: absolute;
    bottom: -1.7rem;
    right: ${({ isOpen }) => (isOpen ? '48px' : '14px')};
    border-radius: 50%;
    box-shadow: ${({ selected }) => !selected && '12px -12px hsl(0, 0%, 15%)'};
  }
`
const TextContainer = styled.div`
  height: 2rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
`
