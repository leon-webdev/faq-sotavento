/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'FAQ Sotavento arena - vento',
    description: 'Este sitio web es de uso exclusivo de los futuros propietarios del megaproyecto sotavento arena - vento. la informacion suministrada acá ha sido recopilada por los miembros del grupo.',
    author: '@kalel_1987',
    twitterUsername: '@kalel_1987',
    // image: '/twitter-img.png',
    siteUrl: 'https://faq-sotavento.netlify.app',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MKHN3ECWL9", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
  ],
}
