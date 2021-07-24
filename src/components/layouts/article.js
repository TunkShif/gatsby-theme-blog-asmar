import React from 'react'
import { graphql } from "gatsby"
import Layout from './layout'
import Post from '../post'
import Markdown from '../markdown'
import ToC from '../toc'
import ScrollButton from '../scroll-button'
import 'katex/dist/katex.min.css'

export default function ArticleLayout({ data: { mdx } }) {
  return (
    <Layout title={mdx.frontmatter.title}>
      <Post
        title={mdx.frontmatter.title}
        date={mdx.frontmatter.date}
        desc={mdx.frontmatter.desc}
        tags={mdx.frontmatter.tags}
        slug={`${mdx.slug}/#`} />
      <ToC headings={mdx.headings} />
      <Markdown mdx={mdx} />
      <ScrollButton />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      slug
      headings {
        depth
        value
      }
      frontmatter {
        title
        tags
        desc
        date(formatString: "YYYY-MM-D")
      }
    }
  }
`