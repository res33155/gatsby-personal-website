import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layouts/layout"
import SEO from "../components/elements/seo"
import Container from "../components/elements/container"
import Spacer from "../components/elements/spacer"
import Navigation from "../components/sections/navigation"

const Typography = createGlobalStyle`
  p {
    margin-bottom: 1.25rem;
  }

  h1, h2, h3, h4, h6, h6 {
    margin: 2.75rem 0 1.25rem;
    font-weight: 400;
    line-height: 1.25;
  }

  h1 {
    margin-top: 0;
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1.05rem;
  }
`

const Post = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
`

const PostContent = styled.div`
  padding: 25px;
  
  a {
      text-decoration: none;
      color: var(--green-2);
      border-bottom: 1px solid var(--green-3);
    }

  a:hover {
    border-bottom-color: var(--green-20);
  }

  img {
    border-radius: 3px;
    border: 1px solid var(--gray-1);
  }
`

const CoverImage = styled(Img)`
  border-radius: 6px 6px 0 0;
`

const PostNavigation = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  height: 5rem;
  align-content: center;
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Typography />
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

            <PostNavigation>
              <p>
                {next && (
                  <>
                    <small>Next Post</small>

                    <br />

                    <Link to={next.fields.slug} rel="next">
                      ← {next.frontmatter.title}
                    </Link>
                  </>
                )}
              </p>

              <p>
                {previous && (
                  <>
                    <small>Previous Post</small>

                    <br />
                    <Link to={previous.fields.slug} rel="prev">
                      {previous.frontmatter.title} →
                    </Link>
                  </>
                )}
              </p>
            </PostNavigation>
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
