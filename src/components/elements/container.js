import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  padding: 0 15px 0 15px;


  @media (max-width: 1024px) {
    .container {
      margin: 0 0.75rem;
    }
  }
`

// TODO: Add prop for this.
// .container-sm {
//   max-width: 700px;
//   margin: 0 auto;
// }

const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container