import React from 'react'
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from './layout'
import Post from '../post'
import Image from '../markdown/image'
import { markdown } from '../../styles/markdown.module.css'

const components = {
  Link, Image
}

export default function ArticleLayout({ data: { mdx } }) {
  return (
    <Layout title={mdx.frontmatter.title}>
      <Post
        title={mdx.frontmatter.title}
        date={mdx.frontmatter.date}
        desc={mdx.frontmatter.desc}
        tags={mdx.frontmatter.tags}
        slug={`${mdx.slug}/#`} />
      <MDXProvider components={components}>
        <article className={`${markdown} mb-4`}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </article>
      </MDXProvider>
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