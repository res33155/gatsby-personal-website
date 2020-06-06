import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 30px 0 60px 0;
  background: var(--blue-2);
  color: var(--white);

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    padding: 15px 0 30px 0;
  }
`

const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: unset;
`

const Paragraph = styled.p`
  width: 40%;
  margin: auto;
  color: var(--blue-4);

  @media (max-width: 576px) {
    width: 80%;
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Heading>
          <span role="img" aria-label="Hand waving">👋</span> Hi, I'm Ryan
        </Heading>

        <Paragraph>
          I'm a full-stack developer from Syracuse, NY. I write about my experiences in tech, create tutorials, and share helpful hints.
        </Paragraph>
      </HeroContainer>
    </>
  )
}

export default Hero