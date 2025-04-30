import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: auto 0;
	width: 10%;
	max-width: 180px;
	min-width: 100px;
	@media (max-width: 1023px) {
		margin-top: 30px;
	}
	@media (min-width: 1022px) {
		margin-top: 52px;
		width: 12%;
	}
`;

const HeaderLogo = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "logos/etimo-logo.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 200
						quality: 90
						placeholder: NONE
					)
				}
			}
		}
	`);

	return (
		<StyledDiv>
			<Link to="/">
				<GatsbyImage
					image={data.placeholderImage.childImageSharp.gatsbyImageData}
					alt="Etimo logo"
				/>
			</Link>
		</StyledDiv>
	);
};

export default HeaderLogo;
