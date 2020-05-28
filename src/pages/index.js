import React from "react"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Navigation from "../components/sections/navigation"
import Hero from "../components/sections/hero"
import BlogSpotlight from "../components/sections/blog-spotlight"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Navigation />
      <Hero />
      <BlogSpotlight />
    </Layout>
  )
}

export default BlogIndex


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`