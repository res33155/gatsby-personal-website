import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Navigation from "../components/sections/navigation"
import BlogListing from "../components/sections/blog-listing"
import Spacer from "../components/elements/spacer"

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: var(--gray-900);
  text-align: center;
`

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <Navigation />
      <Spacer />

      <Heading>Blog Posts</Heading>
      <Spacer />

      <BlogListing />
      <Spacer />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`