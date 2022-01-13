import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/common-elements/layout"
import SEO from "../components/common-elements/seo"
import Container from "../components/common-elements/container"
import Spacer from "../components/common-elements/spacer"
import Navigation from "../components/page-sections/navigation"

const StyledTypography = createGlobalStyle`
  p {
    margin-top: 1.25rem;
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

  ul {
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }

    li > p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const StyledPost = styled.div`
  background-color: var(--white);
  border-radius: 6px;
  box-shadow: var(--medium-shadow);
`

const StyledPostContent = styled.div`
  padding: 25px;
  
  a {
      text-decoration: none;
      color: var(--green-700);
      border-bottom: 1px solid var(--green-400);
    }

  a:hover {
    color: var(--green-600);
    border-bottom-color: var(--green-300);
  }

  img {
    border-radius: 3px;
    border: 1px solid var(--gray-200);
  }
`

const StyledCoverImage = styled(Img)`
  border-radius: 6px 6px 0 0;
`

const StyledPostNavigation = styled.nav`
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
      <StyledTypography />
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Navigation />
      <Spacer />
      <Container size="small">
        <StyledPost>
          <StyledCoverImage
            sizes={{ ...post?.frontmatter?.coverImage?.childImageSharp?.fluid, aspectRatio: 21 / 9 }}
            alt={post.frontmatter.coverImageAltText}
          />

          <StyledPostContent>
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

            <StyledPostNavigation>
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
            </StyledPostNavigation>
          </StyledPostContent>
        </StyledPost>
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
            fluid(maxWidth: 768) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
