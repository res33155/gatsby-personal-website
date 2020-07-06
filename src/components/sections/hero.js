import React from "react"
import styled from "styled-components"

import Container from "../elements/container"

const HeroContainer = styled.div`
  padding-bottom: 3rem;
  background: var(--blue-900);
  color: var(--white);
  text-align: center;
`

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: -0.025rem;
`

const Paragraph = styled.p`
  width: 75%;
  margin: auto;
  color: var(--blue-200);
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Container>
          <Heading>
            <span role="img" aria-label="Hand waving">👋</span> Hi, I'm Ryan
          </Heading>

          <Paragraph>
            I'm a software engineer and technical writer. I work as a full-stack developer using JavaScript, Node.js, and React. I write about my experiences in tech, tutorials, and share helpful hints.
          </Paragraph>
        </Container>
      </HeroContainer>
    </>
  )
}

export default Hero