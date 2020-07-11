import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 99%);
    --black: var(--gray-900);

    --blue-100: hsl(209, 100%, 98%);
    --blue-200: hsl(210, 85%, 85%);
    --blue-300: hsl(211, 80%, 75%);
    --blue-400: hsl(212, 75%, 65%);
    --blue-500: hsl(213, 70%, 55%);
    --blue-600: hsl(214, 65%, 45%);
    --blue-700: hsl(215, 60%, 35%);
    --blue-800: hsl(217, 55%, 25%);
    --blue-900: hsl(216, 50%, 15%);
    --blue-900-base: 216, 50%, 15%;

    --green-100: hsl(143, 100%, 98%);
    --green-200: hsl(144, 85%, 85%);
    --green-300: hsl(145, 80%, 75%);
    --green-400: hsl(146, 75%, 65%);
    --green-500: hsl(147, 70%, 55%);
    --green-600: hsl(148, 65%, 45%);
    --green-700: hsl(149, 60%, 35%);
    --green-800: hsl(150, 55%, 25%);
    --green-900: hsl(151, 50%, 15%);

    --gray-100: hsl(212, 25%, 98%);
    --gray-200: hsl(213, 24%, 85%);
    --gray-300: hsl(214, 23%, 75%);
    --gray-400: hsl(215, 22%, 65%);
    --gray-500: hsl(216, 21%, 55%);
    --gray-600: hsl(217, 20%, 45%);
    --gray-700: hsl(218, 19%, 35%);
    --gray-800: hsl(219, 18%, 25%);
    --gray-900: hsl(220, 17%, 15%);

    background-color: var(--blue-100);
    color: var(--black);
    font-weight: 400;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", "Roboto", "Helvetica Neue", "Noto Sans", "Arial", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    --small-shadow: 0px 1px 1px hsla(var(--blue-900-base), 0.25),
      0px 2px 4px hsla(var(--blue-900-base), 0.25);
    --medium-shadow: 0px 4px 4px hsla(var(--blue-900-base), 0.25),
      0px 5px 15px hsla(var(--blue-900-base), 0.25);
    --large-shadow: 0px 5px 5px hsla(var(--blue-900-base), 0.25),
      0px 10px 25px hsla(var(--blue-900-base), 0.25);
    }

    h1, h2, h3, h4, h5, h6 {
      margin: 0;
    }

    body {
      margin: 0;
      padding: 0;
    }
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Helmet
        script={[
          {
            type: "module",
            src: 'https://unpkg.com/ionicons/dist/ionicons/ionicons.esm.js'
          }
        ]}
      />

      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
