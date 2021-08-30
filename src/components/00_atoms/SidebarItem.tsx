// react
import React from 'react'

// modules
import styled from 'styled-components'

// project files

type Props = {
  children: React.ReactNode
  isOpen?: boolean
}
export default function SidebarItem({ children, isOpen }: Props) {
  return <Item open={isOpen}>{children}</Item>
}

type StyleProps = { open?: boolean }
const Item = styled.div<StyleProps>`
  display: flex;
  height: 3rem;
  justify-content: ${({ open }) => (open ? 'space-between' : 'center')};
  align-items: center;
  margin-bottom: 0.5rem;
`
