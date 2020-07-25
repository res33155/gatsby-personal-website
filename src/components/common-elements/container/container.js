import React from "react"
import styled from "styled-components"

const Wrapper = styled.div.attrs(props => ({
  size: props.size === 'small' ? "768px" : "1280px"
}))` 
  max-width: ${props => props.size};
  margin: 0 auto;
  padding: 0 0.75rem 0 0.75rem;
`

const Container = ({ size, children }) => {
  return (
    <Wrapper size={size}>
      {children}
    </Wrapper>
  )
}

export default Container