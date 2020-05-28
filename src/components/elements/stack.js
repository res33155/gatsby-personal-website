import React from "react"
import styled from "styled-components"

const StackContainer = styled.div`
  display: grid;

  & > * {
    margin: 0 15px 25px 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Stack = ({ children, direction = "vertical" }) => {
  return (
    <StackContainer>
      {children}
    </StackContainer>
  )
}

export default Stack