import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "../components/container"

import devLogo from "../images/dev.svg"
import githubLogo from "../images/github.svg"
import linkedinLogo from "../images/linkedin.svg"
import twitterLogo from "../images/twitter.svg"

const Nav = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(216, 84%, 10%);
  color: hsl(0, 0%, 100%);
  
  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
    padding-top: 25px;
  }
`

const StyledLink = styled(Link)`
  color: hsl(0, 0%, 100%);
  text-decoration: none;
`

const Logo = styled.div`
  font-size: 24px;
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
  height: 20px;
`

const Navigation = () => {
  return (
    <>
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
    </>
  )
}

export default Navigation