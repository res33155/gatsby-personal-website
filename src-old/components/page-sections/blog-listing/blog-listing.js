import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import styled from "styled-components"

import Container from "../../common-elements/container"

const StyledBlogList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  box-shadow: var(--medium-shadow);
  border-radius: 6px;

  &:last-child {
    border-bottom: none;
  }
`

const StyledBlogListItem = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
  grid-gap: 1rem;
  padding: 1.25rem;
  border-bottom: 1px solid var(--gray-200);
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
`

const StyledTitle = styled.span`
  font-weight: 600;
  color: var(--blue-600);
`
const StyledTimestamp = styled.span`
  color: var(--gray-600);
`

const StyledIcon = styled.span`
  color: var(--gray-400);
  display: flex;
  flex-direction: column;
  justify-content: center;
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

      <StyledBlogList>
        {posts.map(({ node }, index) =>
          <StyledLink to={`${node.fields.slug}`} key={index}>
            <StyledBlogListItem>
              <div>
                <StyledTitle>{node.frontmatter.title}</StyledTitle>
                <br />
                <StyledTimestamp>{node.frontmatter.date}</StyledTimestamp>
              </div>

              <StyledIcon><ion-icon name="chevron-forward"></ion-icon></StyledIcon>
            </StyledBlogListItem>
          </StyledLink>
        )}
      </StyledBlogList>
    </Container>
  )
}

export default BlogListing
