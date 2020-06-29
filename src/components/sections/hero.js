import React from "react"
import styled from "styled-components"

import Container from "../elements/container"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0 50px 0;
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

  @media (max-width: 576px) {
    text-align: center; 
  }
`

const Paragraph = styled.p`
  width: 75%;
  /* margin: auto; */
  color: var(--blue-4);
  margin-top: 0;

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin: auto;
    text-align: center;
    width: 80%;
  }
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