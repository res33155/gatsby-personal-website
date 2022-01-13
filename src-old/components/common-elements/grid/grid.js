import React from "react"
import styled from "styled-components"

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Grid = ({ children }) => {
  return (
    <StyledGridContainer>
      {children}
    </StyledGridContainer>
  )
}

export default Grid