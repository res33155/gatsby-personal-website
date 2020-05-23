import React from "react"
import styled, { createGlobalStyle } from 'styled-components'

import Header from "../components/header"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: var(--blue-98);
    color: var(--black);
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica Neue, Noto Sans, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    --blue-5-base: 216, 84%, 5%;
    --blue-5: hsl(216, 84%, 5%);
    --blue-10: hsl(216, 84%, 10%);
    --blue-20: hsl(216, 84%, 20%);
    --blue-30: hsl(216, 84%, 30%);
    --blue-40: hsl(216, 84%, 40%);
    --blue-50: hsl(216, 84%, 50%);
    --blue-60: hsl(216, 84%, 60%);
    --blue-70: hsl(216, 84%, 70%);
    --blue-80: hsl(216, 84%, 80%);
    --blue-95: hsl(216, 84%, 95%);
    --blue-98: rgb(246, 249, 254);
    --green-5: hsl(151, 100%, 5%);
    --green-10: hsl(151, 100%, 10%);
    --green-20: hsl(151, 100%, 20%);
    --green-30: hsl(151, 100%, 30%);
    --green-40: hsl(151, 100%, 40%);
    --green-50: hsl(151, 100%, 45%);
    --green-60: hsl(151, 100%, 60%);
    --green-70: hsl(151, 100%, 70%);
    --green-80: hsl(151, 100%, 80%);
    --green-90: hsl(151, 100%, 90%);
    --green-95: hsl(151, 100%, 95%);
    --green-98: hsl(151, 100%, 98%);
    --gray-5: hsl(0, 0%, 5%);
    --gray-10: hsl(0, 0%, 10%);
    --gray-20: hsl(0, 0%, 20%);
    --gray-30: hsl(0, 0%, 30%);
    --gray-40: hsl(0, 0%, 40%);
    --gray-50: hsl(0, 0%, 50%);
    --gray-60: hsl(0, 0%, 60%);
    --gray-70: hsl(0, 0%, 70%);
    --gray-80: hsl(0, 0%, 80%);
    --gray-90: hsl(0, 0%, 90%);
    --gray-95: hsl(0, 0%, 95%);
    --gray-98: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0, 10%);

    --text-shadow: 0px 1px 1px hsla(var(--blue-5-base), 0.25);
    --small-shadow: 0px 1px 1px hsla(var(--blue-5-base), 0.25),
      0px 2px 4px hsla(var(--blue-5-base), 0.25);
    --medium-shadow: 0px 4px 4px hsla(var(--blue-5-base), 0.25),
      0px 5px 15px hsla(var(--blue-5-base), 0.25);
    --large-shadow: 0px 5px 5px hsla(var(--blue-5-base), 0.25),
      0px 10px 25px hsla(var(--blue-5-base), 0.25);

    --blue-gradient: linear-gradient(
        180deg,
        hsl(216, 84%, 13%) 0%,
        hsl(216, 84%, 10%) 100%
      ),
      hsl(216, 84%, 10%);
    }

    h1, h2, h3, h4, h6, h6 {
      font-weight: 600;
      line-height: 1.25;
    }
`

const PageWrapper = styled.div`
  /* min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between; */
`

const Layout = ({ location, title, children }) => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <main>{children}</main>
      </PageWrapper>
    </>
  )
}

export default Layout
