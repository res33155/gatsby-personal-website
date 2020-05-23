import React from "react"
import styled from "styled-components"

const Container = styled.article`
  flex: 1 1 auto;
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
  font-size: 16px;
  color: var(--black);
  background: var(--white);
`

const Content = styled.div`
  padding: 25px;
`

const Heading = styled.h3`
  color: var(--blue-40);
  font-size: 20px;
`

const Timestamp = styled.p`
  color: var(--gray-20);
`

const Card = ({ heading, timestamp, content }) => {
  return (
    <Container>
      <Content>
        <Timestamp>
          {timestamp}
        </Timestamp>

        <Heading>{heading}</Heading>


        <p>{content}</p>
      </Content>
    </Container>
  )
}

export default Card