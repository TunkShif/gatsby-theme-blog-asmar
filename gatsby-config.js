module.exports = {
  siteMetadata: {
    siteUrl: "https://tunkshi.one",
    title: "Asmar",
    subtitle: "Gatsby Blog",
    author: "TunkShif",
    createDate: "2021"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Arvo`, `Fira Code`
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [],
        remarkPlugins: [],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-awesome-pagination",
  ]
}
