import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogSpotlight from "../components/blog-spotlight"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
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