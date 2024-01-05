/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// TODO: Maybe remove the twitter stuff.

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

// Same as react-helmet uses
type MetaProps = JSX.IntrinsicElements['meta'];

type Props = {
	title: string;
	description?: string;
	lang?: string;
	meta?: MetaProps[];
};

//TODO: Gatsby image for logo?
const SEO = ({ description, lang, meta = [], title }: Props) => {
	const { site, logo } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						imageAlt
						imageType
					}
				}
				logo: file(relativePath: { eq: "etimo-logo-sharing.png" }) {
					childImageSharp {
						gatsbyImageData(layout: CONSTRAINED, width: 1200)
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaData: MetaProps[] = [
		{
			name: `twitter:card`,
			content: `summary`,
		},
		{
			name: `twitter:creator`,
			content: site.siteMetadata.author,
		},
		{
			name: `twitter:title`,
			content: title,
		},
		{
			name: `twitter:description`,
			content: metaDescription,
		},
		{
			name: `title`,
			property: `og:title`,
			content: site.siteMetadata.title,
		},
		{
			name: `type`,
			property: `og:type`,
			content: site.siteMetadata.type,
		},
		{
			name: `url`,
			property: `og:url`,
			content: site.siteMetadata.siteUrl,
		},
		{
			name: `description`,
			property: `og:description`,
			content: site.siteMetadata.description,
		},
		{
			name: `image`,
			property: `og:image`,
			content: logo.childImageSharp.gatsbyImageData,
		},
		{
			name: `image-type`,
			property: `og:image:type`,
			content: site.siteMetadata.imageType,
		},
		{
			name: `image-alt`,
			property: `og:image:alt`,
			content: site.siteMetadata.imageAlt,
		},
		{
			name: `author`,
			content: site.siteMetadata.author,
		},
		...meta,
	];

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`${site.siteMetadata.title} | %s`}
			meta={metaData}
		/>
	);
};

export default SEO;
