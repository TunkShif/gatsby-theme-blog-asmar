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
          `Arvo`, `Fira Code`, `Noto Serif SC`
        ],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          "gatsby-remark-autolink-headers"
        ],
        remarkPlugins: [
          require('remark-math')
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog Asmar`,
        short_name: `Asmar`,
        icon: "src/assets/images/avatar.svg",
        start_url: `/`,
        background_color: `#F9FAFB`,
        theme_color: `#92400E`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-awesome-pagination",
    "gatsby-remark-autolink-headers",
    "gatsby-plugin-breakpoints"
  ]
}
