import React from "react"
import styled from "styled-components"

const Space = styled.div`
  margin-bottom: 15px;
`

const Spacer = ({ children, direction = "vertical" }) => {
  return (
    <Space />
  )
}

export default Spacer