import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  display: flex;
`

const Container = styled.article`
  flex: 1 1 auto;
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
  font-size: 1rem;
  color: var(--black);
  background: var(--white);
`

const Content = styled.div`
  padding: 25px;

  & > * {
    margin: 0 0 10px 0;
  }
`

const Heading = styled.h3`
  color: var(--blue-3);
  font-size: 1.25rem;
  font-weight: 600;
`

const Timestamp = styled.p`
  color: var(--gray-3);
  font-size: 0.90rem;

`

const StyledImage = styled(Img)`
  border-radius: 6px 6px 0 0;
`

const Card = ({ link, image, imageAltText, heading, timestamp, content }) => {
  return (
    <>
      <StyledLink to={link} aria-label={heading}>
        <Container>
          <StyledImage
            sizes={{ ...image, aspectRatio: 21 / 9 }}
            alt={imageAltText}
          />

          <Content>
            <Timestamp>
              {timestamp}
            </Timestamp>

            <Heading>{heading}</Heading>


            <p>{content}</p>
          </Content>
        </Container>
      </StyledLink>
    </>
  )
}

export default Card