const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "Mdx") {
    const { createNodeField } = actions
    if (node.internal.type === "Mdx") {
      const value = createFilePath({ node, getNode, basePath: `pages/post` })
      createNodeField({
        name: "slug",
        node,
        value: `/post${value}`,
      })
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx(
        filter: {slug: {regex: "/^post//"}}
        sort: {order: DESC, fields: frontmatter___date}
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }`)

  if (result.errors) {
    reporter.panicOnBuild('ERROR: failed to run GraphQL query while creating pages.')
  }

  const posts = result.data.allMdx.edges

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    pathPrefix: "/posts",
    component: path.resolve("./src/components/layouts/posts.js")
  })

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/layouts/article.js`),
      context: { id: node.id },
    })
  })
}