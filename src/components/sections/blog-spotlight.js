import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Container from "../elements/container"
import Card from "../elements/card"
import Grid from "../elements/grid"

const SectionHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`

const BlogSpotlight = ({ children }) => {
  const {
    allMarkdownRemark: {
      edges: posts
    }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                description
                coverImageAltText
                coverImage {
                  childImageSharp {
                    fluid(maxWidth: 445) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Container>
      <SectionHeading>Latest Posts</SectionHeading>

      <Grid>
        {posts.map(({ node }) =>
          <Card
            link={node.fields.slug}
            image={node.frontmatter.coverImage.childImageSharp.fluid}
            imageAltText={node.frontmatter.coverImageAltText}
            key={node.fields.slug}
            heading={node.frontmatter.title}
            timestamp={node.frontmatter.date}
            content={node.frontmatter.description || node.excerpt}
          />
        )}
      </Grid>

      {/* <p><Link to="#">View All Posts ></Link></p> */}
    </Container>
  )
}

export default BlogSpotlight
