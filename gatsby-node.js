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

  const query = await graphql(`
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
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panicOnBuild('ERROR: failed to run GraphQL query while creating pages.')
  }

  const posts = query.data.allMdx.edges
  const tags = query.data.allMdx.group

  // Creating /posts/ page

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    pathPrefix: "/posts",
    component: path.resolve("./src/components/layouts/posts.js")
  })

  // Creating each post page

  posts.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/components/layouts/article.js`),
      context: { id: node.id },
    })
  })

  /**
   * Creating /tag/<tag> pages
   * Getting warning for just using `tags.forEach` to create thoses pages
   * Find the solution to this in this issue: https://github.com/gatsbyjs/gatsby/issues/19489
   * Even though I don't completely know what it is doing since I'm not an expert in
   * JavaScript Promise things, but the warnings are gone :)
   */

  const promises = tags.map(async ({ tag }) => {
    const query = await graphql(`
      query {
        allMdx(
          filter: {slug: {regex: "/^post//"}, frontmatter: {tags: {in: [ "${tag}" ]}}}
          sort: {order: DESC, fields: frontmatter___date}
        ) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)

    if (query.errors) {
      reporter.panicOnBuild('ERROR: failed to run GraphQL query while creating tag pages.')
    }

    const items = query.data.allMdx.edges

    paginate({
      createPage,
      items: items,
      itemsPerPage: 5,
      pathPrefix: `/tag/${tag}`,
      component: path.resolve(`./src/components/layouts/tag.js`),
      context: { tag: tag }
    })
  })

  await Promise.all(promises)

}