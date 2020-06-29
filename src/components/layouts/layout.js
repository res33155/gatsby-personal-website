import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
    --gray-5: hsl(0, 0%, 95%);
    
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
`

const theme = {
  breakpoints: ['576px', '768px', '1024px'],
  space: ["5px", "10px", "15px", "25px", "50px", "75px"]
}

const Layout = ({ location, title, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
