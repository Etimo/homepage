module.exports = {
	siteMetadata: {
		title: `Etimo`,
		description: `Vår vision: Sveriges ledande utvecklingsorganisation.`,
		author: `@etimo`,
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
		`gatsby-plugin-react-helmet`,
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
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-web-font-loader`,
			options: {
				google: {
					families: [
						'DM Serif Display',
						'Noto Sans JP',
						'Quicksand',
						'Overpass',
					],
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
		// ! Add gatsby-plugin-google-analytics
		// TODO: Maybe add gatsby-plugin-sitemap for better search-engine results
	],
};
