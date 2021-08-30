// react
import React from 'react'
import styled from 'styled-components'

// modules

// project files
import { AltSidebar, Content, Header, Sidebar } from '../02_organisms'

export default function HomePageLayout() {
  return (
    <HomePage>
      <Sidebar />
      <AltSidebar />
      <Header />
      <Content />
    </HomePage>
  )
}

const HomePage = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: hsl(0, 0%, 7%);
  z-index: 10;
`
