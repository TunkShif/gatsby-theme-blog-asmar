import * as React from 'react'
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from './layout'

const shortcodes = { Link }

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout title={mdx.frontmatter.title}>
      <MDXProvider components={shortcodes}>
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`