/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site!",
    author: "@gzimasani",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `fu9l6r85cmbs`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `m_k7lOWwmSIIY6UUVx-IM2W4u0HclF685YsvkgXujUo`,
      },
    },
  ],
}
