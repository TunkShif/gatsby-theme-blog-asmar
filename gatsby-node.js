const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode, basePath: `pages/posts` })
      createNodeField({
        name: "slug",
        node,
        value: `/posts${value}`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(filter: {slug: {regex: "/^posts//"}}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/post-layout.js`),
      context: { id: node.id },
    })
  })
}