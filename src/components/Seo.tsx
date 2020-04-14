/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// TODO: Maybe remove the twitter stuff.

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// Same as react-helmet uses
type MetaProps = JSX.IntrinsicElements['meta'];

type Props = {
	title: string;
	description?: string;
	lang?: string;
	meta?: MetaProps[];
};

const SEO = ({ description, lang, meta = [], title }: Props) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;
	const metaData: MetaProps[] = [
		{
			name: `description`,
			content: metaDescription,
		},
		{
			property: `og:title`,
			content: title,
		},
		{
			property: `og:description`,
			content: metaDescription,
		},
		{
			property: `og:type`,
			content: `website`,
		},
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
