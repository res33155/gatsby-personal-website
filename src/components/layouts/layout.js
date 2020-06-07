import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    --blue-1-base: 216, 84%, 5%;
    --blue-1: hsl(216, 84%, 5%);
    --blue-2: hsl(216, 84%, 10%);;
    --blue-3: hsl(216, 84%, 40%);
    --blue-4: hsl(216, 84%, 80%);
    --blue-5: hsl(216, 84%, 98%);

    --green-1: hsl(151, 100%, 5%);
    --green-2: hsl(151, 100%, 10%);
    --green-3: hsl(151, 100%, 40%);
    --green-4: hsl(151, 100%, 80%);
    --green-5: hsl(151, 100%, 98%);

    --gray-1: hsl(0, 0%, 5%);
    --gray-2: hsl(0, 0%, 10%);
    --gray-3: hsl(0, 0%, 40%);
    --gray-4: hsl(0, 0%, 80%);
    --gray-5: hsl(0, 0%, 98%);
    
    --white: hsl(0, 0%, 98%);
    --black: hsl(200, 18%, 26%);

    margin: 0;
    padding: 0;
    background-color: var(--blue-5);
    color: var(--black);
    font-weight: 400;
    line-height: 1.65;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica Neue, Noto Sans, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    --small-shadow: 0px 1px 1px hsla(var(--blue-1-base), 0.25),
      0px 2px 4px hsla(var(--blue-1-base), 0.25);
    --medium-shadow: 0px 4px 4px hsla(var(--blue-1-base), 0.25),
      0px 5px 15px hsla(var(--blue-1-base), 0.25);
    --large-shadow: 0px 5px 5px hsla(var(--blue-1-base), 0.25),
      0px 10px 25px hsla(var(--blue-1-base), 0.25);
    }

    p {
      margin-bottom: 1.25rem;
    }

    h1, h2, h3, h4, h6, h6 {
      margin: 2.75rem 0 1.25rem;
      font-weight: 400;
      line-height: 1.25;
    }

    h1 {
      margin-top: 0;
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1.05rem;
    }
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
