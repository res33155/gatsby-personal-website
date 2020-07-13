import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  background-color: var(--blue-600);
  border-radius: 4px;
  line-height: 1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  color: var(--blue-100);
  text-decoration: none;
  font-weight: 600;
  box-shadow: var(--medium-shadow);
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

const Button = ({ to, label, children }) => {
  return (
    <>
      <StyledButton to={to} aria-label={label}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button