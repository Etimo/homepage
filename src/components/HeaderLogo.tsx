import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
	margin: auto 0;
	@media (max-width: 1023px) {
		margin-top: 23px;
	}
	width: 20%;
	max-width: 180px;
	min-width: 125px;
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
