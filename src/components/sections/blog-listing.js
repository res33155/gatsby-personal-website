import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Container from "../elements/container"

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: var(--medium-shadow);
  border-radius: 6px;
`

const BlogListItem = styled.div`
  display: grid;
  grid-template-columns: 50% 45% 5%;
  padding: 1.25rem;
  border-bottom: 1px solid var(--gray-200);
`

const BlogLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`

const Title = styled.span`
  font-weight: 600;
  color: var(--blue-600);
`
const Timestamp = styled.span`
  color: var(--gray-600);
`


const Icon = styled.span`
  color: var(--gray-400);
`

const BlogListing = () => {
  const {
    allMarkdownRemark: {
      edges: posts
    }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
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

      <BlogList>
        {posts.map(({ node }, index) =>
          <BlogLink to={`${node.fields.slug}`} key={index}>
            <BlogListItem>
              <Title>{node.frontmatter.title}</Title>

              <Timestamp>Posted {node.frontmatter.date}</Timestamp>

              <Icon><ion-icon name="chevron-forward"></ion-icon></Icon>
            </BlogListItem>
          </BlogLink>
        )}
      </BlogList>
    </Container>
  )
}

export default BlogListing
