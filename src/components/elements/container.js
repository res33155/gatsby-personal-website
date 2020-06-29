import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 0.75rem 0 0.75rem;
`

const Container = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Container