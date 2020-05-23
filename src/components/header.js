import React from "react"
import styled from "styled-components"

import Navigation from "../components/navigation"
import Hero from "../components/hero"

const HeaderContainer = styled.header`
  background: var(--blue-10);
  color: var(--white);
`

const PageHighlight = styled.div`
  background: var(--green-50);
  height: 3px;
`

const Header = () => {
  return (
    <>
      <PageHighlight />
      <HeaderContainer>
        <Navigation />
        <Hero />
      </HeaderContainer>
    </>
  )
}

export default Header