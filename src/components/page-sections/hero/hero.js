import React from "react"
import styled from "styled-components"

import Container from "../../common-elements/container"

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

const HandWave = styled.span`
  animation-name: wave-animation; 
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate( 0.0deg) 
    }
    10% {
      transform: rotate(14.0deg)
    }
    20% {
      transform: rotate(-8.0deg) 
    }
    30% {
      transform: rotate(14.0deg) 
    }
    40% {
      transform: rotate(-4.0deg) 
    }
    50% {
      transform: rotate(10.0deg) 
    }
    60% {
      transform: rotate(0.0deg) 
    }
    100% {
      transform: rotate(0.0deg)
    }
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Container>
          <Heading>
            <HandWave>
              <span
                role="img"
                aria-label="Hand waving"
              >
                👋
              </span>
            </HandWave> Hi, I'm Ryan
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