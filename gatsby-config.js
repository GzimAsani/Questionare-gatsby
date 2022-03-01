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
    // person: { name: "john", age: 32 },
    // simpleData: ["item1", "item2"],
    // complexData: [
    //   { name: "john", age: 32 },
    //   { name: "Suzan", age: 21 },
    // ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
