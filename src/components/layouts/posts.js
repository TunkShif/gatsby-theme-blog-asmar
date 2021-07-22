import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import PostList from '../post-list'
import Pagination from '../pagination'

const PostsPage = ({data: {allMdx}, pageContext}) => {
  return (
    <Layout title="All Posts">
      <PostList posts={allMdx.nodes} />
      <Pagination
        current={pageContext.humanPageNumber}
        total={pageContext.numberOfPages}
        prev={pageContext.previousPagePath}
        next={pageContext.nextPagePath}  />
    </Layout>
  )
}

export default PostsPage

export const blogListQuery = graphql`
  query BlogPostsListQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: {slug: {regex: "/^post//"}}
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