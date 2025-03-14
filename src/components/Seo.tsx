/**
	https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
*/

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

type MetaProps = JSX.IntrinsicElements['meta'];

type Props = {
	title: string;
	description: string;
};

const SEO = ({ description, title }: Props) => {
	const { site, logo } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
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

	const metaData: MetaProps[] = [
		{
			name: 'title',
			property: `title`,
			content: site.siteMetadata.title,
		},
		{
			name: 'description',
			property: `description`,
			content: description ?? site.siteMetadata.description,
		},
		{
			name: 'image',
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
	];

	return (
		<>
			<title>{`${site.siteMetadata.title} | ${title}`}</title>
			{metaData.map((meta) => (
				<meta name={meta.name} content={meta.content} key={meta.name}></meta>
			))}
		</>
	);
};

export default SEO;
