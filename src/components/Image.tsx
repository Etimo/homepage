import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

//TODO: ta bort? Verkar inte användas någonstans... Klara. 2023-11-15

const Image = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 300)
				}
			}
		}
	`);

	return (
		<GatsbyImage
			image={data.placeholderImage.childImageSharp.gatsbyImageData}
			alt=""
		/>
	);
};

export default Image;
