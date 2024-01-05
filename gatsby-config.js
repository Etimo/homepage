module.exports = {
	siteMetadata: {
		title: 'Etimo',
		type: 'website',
		author: '@etimo',
		siteUrl: 'https://etimo.se',
		description: 'Bättre mjukvara för en bättre värld.',
		imageAlt: 'Etimo logo',
		imageType: 'image/png',
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
		{
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
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-remove-serviceworker`,
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
		`gatsby-plugin-netlify-cms`,
		'gatsby-plugin-ts-checker',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
