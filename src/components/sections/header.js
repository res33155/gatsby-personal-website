import React from "react"
import styled from "styled-components"

import Navigation from "./navigation"
import Hero from "./hero"

const HeaderContainer = styled.header`
  /* background: var(--blue-10);
  color: var(--white); */
`

const PageHighlight = styled.div`
  /* background: var(--green-50);
  height: 3px; */
`

const Header = ({ showHero = true }) => {
  let hero;

  if (showHero) {
    hero = <Hero />
  }

  return (
    <>
      <PageHighlight />
      <HeaderContainer>
        {/* <Navigation /> */}
        {hero}
      </HeaderContainer>
    </>
  )
}

export default Header