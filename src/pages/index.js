import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Heading from '../components/heading'
import Layout from '../components/layouts/layout'
import PostList from '../components/post-list'
import Markdown from '../components/markdown'
import Column from '../components/markdown/column'
import RandomKittyPic from '../components/custom/random-kitty-pics'

const IndexPage = () => {
  const { allMdx, mdx } = useStaticQuery(graphql`
    query RecentPostsAndHomePageQuery {
      allMdx(
        filter: {slug: {regex: "/^post//"}}
        sort: {order: DESC, fields: frontmatter___date}
        limit: 3
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
      mdx(slug: {eq: "home"}) {
        body
        slug
      }
    }
  `)

  return (
    <Layout title="Homepage" >
      <section>
        <Column>
          <div>
            <RandomKittyPic />
          </div>
          <div>
            <Heading iconClass="far fa-grin-squint-tears" title="Hi, there!" />
            <Markdown mdx={mdx} />
          </div>
        </Column>
      </section>
      <section>
        <Heading iconClass="fas fa-history" title="Latested Articles" />
        <PostList posts={allMdx.nodes} />
      </section>
    </Layout>
  )
}

export default IndexPage
