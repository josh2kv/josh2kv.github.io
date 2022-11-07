const path = require(`path`);

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `SHJ's Portfolio`,
    description: `Seongho Jo's portfolio homepage to get a job`,
    author: `Seongho Jo`,
    siteUrl: `https://josh2kv.github.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`, `etc`),
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
      },
    },
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: 'blurred',
          quality: 100,
          formats: ['auto', 'webp'],
          breakpoints: [576, 768, 992, 1200, 1400, 1600],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Noto Sans KR:100,300,400,500,700'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/etc/favicon.png',
      },
    },
    // `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-google-gtag`,
    // 'gatsby-plugin-sitemap',
  ],
};
