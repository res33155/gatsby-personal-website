import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > * {
    margin: 0 15px 25px 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Grid = ({ children, direction = "vertical" }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Grid