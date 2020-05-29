import React from "react"
import styled from 'styled-components'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Container from "../components/elements/container"
import Spacer from "../components/elements/spacer"
import Navigation from "../components/sections/navigation"

const CoverImage = styled(Img)`
  border-radius: 6px;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Navigation />
      <Spacer />
      <Container>
        <CoverImage
          sizes={{ ...post.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 21 / 9 }}
          alt={post.frontmatter.coverImageAltText}
        />

        <article>
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <p>
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>

        {/* <nav>
            <p>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </p>
            <p>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </p>
          </nav> */}
      </Container>

    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        coverImageAltText
        coverImage {
          childImageSharp {
            fluid(maxWidth: 950) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
