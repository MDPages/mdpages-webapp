module.exports = {
  siteMetadata: {
    title: 'MDPages',
    description: '',
    author: 'Team @MDPages with @Starchasers support'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'MDPages',
        short_name: 'MDP',
        start_url: '/'
      }
    }
  ]
}
