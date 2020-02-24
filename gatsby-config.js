require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `The Arctic Institute`,
    description: `The Arctic Institute is an interdisciplinary, independent think tank focused on Arctic policy issues with a network of researchers across the world.`,
    author: `@arcticinstitute`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `thearcticinstitute.org`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        perPage: 100,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          // "**/users",
        ],
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`
  ]
}
