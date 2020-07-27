import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import BlogListing from "../components/page-sections/blog-listing"
import Layout from "../components/common-elements/layout"
import Navigation from "../components/page-sections/navigation"
import SEO from "../components/common-elements/seo"
import Spacer from "../components/common-elements/spacer"

const StyledHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: var(--gray-900);
  text-align: center;
`

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Navigation />
      <Spacer />

      <StyledHeading>Blog Posts</StyledHeading>
      <Spacer />

      <BlogListing />
      <Spacer />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`