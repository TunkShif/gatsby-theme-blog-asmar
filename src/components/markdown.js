import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Image from './markdown/image'
import Column from './markdown/column'
import { Pre } from './markdown/code'
import { markdown } from '../styles/markdown.module.css'

const components = {
  pre: (props) => <Pre {...props.children.props} />,
  Link, Image, Column
}

const Markdown = ({mdx}) => {
  return (
      <MDXProvider components={components}>
        <article className={`${markdown} mb-4`}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </article>
      </MDXProvider>
  )
}

export default Markdown