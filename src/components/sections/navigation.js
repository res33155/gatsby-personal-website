import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../elements/container"

import devLogo from "../../images/dev.svg"
import githubLogo from "../../images/github.svg"
import linkedinLogo from "../../images/linkedin.svg"
import twitterLogo from "../../images/twitter.svg"

const PageHighlight = styled.div`
  background: var(--green-3);
  height: 3px;
`

const NavContainer = styled.div`
  background: var(--blue-2);
  color: var(--white);
`

const Nav = styled.nav`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--blue-2);
  color: var(--white);
  
  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
    padding: 15px 0 15px 0;
  }
`

const StyledLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  
`

const Logo = styled.div`
  font-size: 1.25rem;
  
`

const SocialLinks = styled.div`
  display: flex;
`

const SocialIcon = styled.div`

  &:not(:first-of-type) {
    margin-left: 25px;
  }

  @media (max-width: 576px) {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`

const IconImage = styled.img`
  height: 18px;
`

const Navigation = () => {
  return (
    <>
      <NavContainer>
        <PageHighlight />
        <Container>
          <Nav>
            <Logo>
              <StyledLink to="/">Ryan Smith</StyledLink>
            </Logo>

            <SocialLinks>
              <SocialIcon>
                <a href="https://dev.to/ryansmith" aria-label="DEV Community">
                  <IconImage src={devLogo} alt="DEV Community" />
                </a>
              </SocialIcon>

              <SocialIcon>
                <a href="https://github.com/ryan3E0" aria-label="GitHub">
                  <IconImage src={githubLogo} alt="GitHub" />
                </a>
              </SocialIcon>

              <SocialIcon>
                <a href="https://www.linkedin.com/in/ryan-smith3/" aria-label="LinkedIn">
                  <IconImage src={linkedinLogo} alt="LinkedIn" />
                </a>
              </SocialIcon>

              <SocialIcon>
                <a href="https://twitter.com/Ryan3E0" aria-label="Twitter">
                  <IconImage src={twitterLogo} alt="Twitter" />
                </a>
              </SocialIcon>
            </SocialLinks>
          </Nav>
        </Container>
      </NavContainer>
    </>
  )
}

export default Navigation