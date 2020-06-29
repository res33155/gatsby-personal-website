import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { grid, space } from 'styled-system'

import Container from "../elements/container"
import Card from "../elements/card"

const Grid = styled.div`
  display: grid;
  ${grid}
  ${space}
`

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025rem;
  color: var(--blue-2);
  margin: 0;
  ${space}
`

// const Button = styled(Link)`
//   box-sizing: border-box;
//   border-width: 0;
//   border-style: solid;
//   border-color: #e2e8f0;
//   font-family: inherit;
//   font-size: 100%;
//   margin: 0;
//   overflow: visible;
//   text-transform: none;
//   background-image: none;
//   cursor: pointer;
//   background-color: var(--blue-3);
//   border-radius: .25rem;
//   display: inline-block;
//   line-height: 1;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   padding-left: 2rem;
//   padding-right: 2rem;
//   color: #fff;
//   text-decoration: none;
// `

const BlogSpotlight = () => {
  const {
    allMarkdownRemark: {
      edges: posts
    }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          # limit: 2
        ) {
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
                    fluid(maxWidth: 503) {
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
      <Heading my={3}>Latest Posts</Heading>

      <Grid gridGap={3} gridTemplateColumns={[null, "1fr", "1fr 1fr"]} m={3}>
        {posts.map(({ node }) =>
          <Card
            content={node.frontmatter.description}
            heading={node.frontmatter.title}
            image={node?.frontmatter?.coverImage?.childImageSharp?.fluid}
            imageAltText={node.frontmatter.coverImageAltText}
            key={node.fields.slug}
            link={node.fields.slug}
            timestamp={node.frontmatter.date}
          />
        )}
      </Grid>

      {/* <AllPostsButton to="/blog">View All</AllPostsButton> */}
    </Container>
  )
}

export default BlogSpotlight
