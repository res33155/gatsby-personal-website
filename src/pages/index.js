import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import BlogSpotlight from "../components/page-sections/blog-spotlight"
import Button from "../components/common-elements/button"
import Hero from "../components/page-sections/hero"
import Layout from "../components/common-elements/layout"
import Navigation from "../components/page-sections/navigation"
import SEO from "../components/common-elements/seo"
import Spacer from "../components/common-elements/spacer"

const AlignedContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: var(--gray-900);
  text-align: center;
`

const Home = ({ data, location }) => {
  console.log(data)
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Navigation />
        <Hero />
        <Spacer />

        <Heading>Latest Blog Posts</Heading>
        <Spacer />

        <BlogSpotlight />
        <Spacer />

        <AlignedContainer>
          <Button to="/blog" label="View All">View All Posts</Button>
        </AlignedContainer>
        <Spacer />
      </Layout>
    </>
  )
}

export default Home


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`