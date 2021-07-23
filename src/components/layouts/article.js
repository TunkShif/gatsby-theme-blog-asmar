import React from 'react'
import { graphql } from "gatsby"
import Layout from './layout'
import Post from '../post'
import Markdown from '../markdown'

export default function ArticleLayout({ data: { mdx } }) {
  return (
    <Layout title={mdx.frontmatter.title}>
      <Post
        title={mdx.frontmatter.title}
        date={mdx.frontmatter.date}
        desc={mdx.frontmatter.desc}
        tags={mdx.frontmatter.tags}
        slug={`${mdx.slug}/#`} />
      <Markdown mdx={mdx} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      slug
      frontmatter {
        title
        tags
        desc
        date(formatString: "YYYY-MM-D")
      }
    }
  }
`