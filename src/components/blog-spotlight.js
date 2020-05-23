import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

import Container from "../components/container"
import Card from "../components/card"
import Stack from "../components/stack"

const BlogSpotlight = ({ children }) => {
  const posts = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  ).allMarkdownRemark.edges

  return (
    <Container>
      <h2>Latest Posts</h2>

      <Stack>
        {posts.map(({ node }) => {

          return (
            <>
              <Card
                key={node.fields.slug}
                heading={node.frontmatter.title}
                timestamp={node.frontmatter.date}
                content={node.frontmatter.description || node.excerpt}
              />
            </>
          )
        })}
      </Stack>

      {/* <p><Link to="#">View All Posts ></Link></p> */}
    </Container>
  )
}

export default BlogSpotlight
