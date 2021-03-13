const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  siteMetadata: {
    title: `e.gilles_writes`,
    description: `A writer's blog`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
