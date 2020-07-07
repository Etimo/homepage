import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
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
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

	return (
		<StyledDiv>
			<Link to="/">
				<Img fadeIn fluid={data.placeholderImage.childImageSharp.fluid} />
			</Link>
		</StyledDiv>
	);
};

export default HeaderLogo;
