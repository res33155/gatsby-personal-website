import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Container from "../../common-elements/container"
import Card from "../../common-elements/card"
import Grid from "../../common-elements/grid"

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
          limit: 3
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
                    fluid(maxWidth: 410) {
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
      <Grid>
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
    </Container>
  )
}

export default BlogSpotlight
