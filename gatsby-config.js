module.exports = {
	siteMetadata: {
		title: `Etimo`,
		description: `Vår vision: Sveriges ledande utvecklingsorganisation.`,
		author: `@etimo`,
		siteUrl: 'https://etimo.se',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-postcss`,
		},
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				allExtensions: true,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			// TODO: Figure out exactly what this does
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `browser`,
				icon: `src/images/etimofavicon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-remove-serviceworker`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: ['Montserrat:300', 'Questrial'],
				},
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
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-47276360-1',
				head: true,
			},
		},
		`gatsby-plugin-netlify-cms`,
		`gatsby-plugin-image`,
		// ! Add gatsby-plugin-google-analytics
		// TODO: Maybe add gatsby-plugin-sitemap for better search-engine results
	],
};
