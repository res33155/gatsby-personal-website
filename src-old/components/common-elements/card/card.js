import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  display: flex;
`

const StyledContainer = styled.article`
  flex: 1 1 auto;
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
  font-size: 1rem;
  color: var(--black);
  background: var(--white);
  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: unset;
    box-shadow: var(--large-shadow);
  }
  
  &:active {
    box-shadow: unset;
    box-shadow: var(--small-shadow);
  }
`

const Content = styled.div`
  padding: 25px;

  & > * {
    margin: 0 0 15px 0;
  }
`

const Heading = styled.h3`
  color: var(--blue-600);
  font-size: 1rem;
  font-weight: 500;
`

const Timestamp = styled.p`
  color: var(--gray-600);
`

const StyledImage = styled(Img)`
  border-radius: 6px 6px 0 0;
`

const Card = ({ link, image, imageAltText, heading, timestamp, content }) => {
  return (
    <>
      <StyledLink to={link} aria-label={heading}>
        <StyledContainer>
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
        </StyledContainer>
      </StyledLink>
    </>
  )
}

export default Card