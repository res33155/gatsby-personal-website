import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 25px 0 50px 0;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 25px 0 25px 0;
  }
`

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
`

const Paragraph = styled.p`
  width: 60%;
  margin: auto;
  color: var(--blue-80);

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Heading>Title</Heading>
        <Paragraph>👋 Paragraph.</Paragraph>
      </HeroContainer>
    </>
  )
}

export default Hero