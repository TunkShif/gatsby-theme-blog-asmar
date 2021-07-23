import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layouts/layout"
import Heading from "../components/heading"
import Markdown from "../components/markdown"

const AboutPage = () => {
  const { allMdx: { edges } } = useStaticQuery(graphql`
    query AboutPageQuery {
      allMdx(filter: {slug: {eq: "about"}}) {
        edges {
          node {
            body
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout title="About">
      <Heading iconClass="fas fa-cat" title="Aboue Me" />
      <Markdown mdx={edges[0].node} />
    </Layout>
  )
}

export default AboutPage