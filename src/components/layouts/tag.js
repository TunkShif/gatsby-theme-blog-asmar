import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Heading from '../heading'
import PostList from '../post-list'
import Pagination from '../pagination'

const TagPage = ({data: {allMdx}, pageContext}) => {
  console.log(pageContext)
  return (
    <Layout title={`${pageContext.tag} - All Posts`}>
      <Heading iconClass="fas fa-tag" title={`${pageContext.tag}`} />
      <PostList posts={allMdx.nodes} />
      <Pagination
        current={pageContext.humanPageNumber}
        total={pageContext.numberOfPages}
        prev={pageContext.previousPagePath}
        next={pageContext.nextPagePath} />
    </Layout>
  )
}

export default TagPage

export const TagPostQuery = graphql`
query TagPostQuery($skip: Int!, $limit: Int!, $tag: String!) {
  allMdx(
    filter: {slug: {regex: "/^post//"}, frontmatter: {tags: {in: [$tag]}}}
    sort: {order: DESC, fields: frontmatter___date}
    limit: $limit
    skip: $skip
  ) {
    nodes {
      id
      slug
      frontmatter {
        title
        tags
        desc
        date(formatString: "YYYY-MM-D")
      }
    }
  }
}
`