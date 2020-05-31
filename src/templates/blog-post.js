import React from "react"
import styled from 'styled-components'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Container from "../components/elements/container"
import Spacer from "../components/elements/spacer"
import Navigation from "../components/sections/navigation"

const Post = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
`

const PostContent = styled.div`
  padding: 25px;
  
  a {
      text-decoration: none;
      color: var(--green-20);
      border-bottom: 1px solid var(--green-80);
    }

  a:hover {
    border-bottom-color: var(--green-20);
  }

  img {
    border-radius: 3px;
    border: 1px solid var(--gray-5);
  }
`

const CoverImage = styled(Img)`
  border-radius: 6px 6px 0 0;
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
        <Post>
          <CoverImage
            sizes={{ ...post.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 21 / 9 }}
            alt={post.frontmatter.coverImageAltText}
          />

          <PostContent>
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
          </PostContent>
        </Post>
        <Spacer />
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
