import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledImg = styled(Img)`
	margin: auto 0;
	width: 20%;
	max-width: 180px;
	min-width: 125px;
`;

const HeaderLogo = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "etimo-logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<StyledImg fadeIn fluid={data.placeholderImage.childImageSharp.fluid} />
	);
};

export default HeaderLogo;
