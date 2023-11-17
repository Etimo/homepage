import { motion, useAnimation } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import BlurIn from '../animations/variants/BlurIn';

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
			placeholderImage: file(relativePath: { eq: "etimo-logo.png" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 200, quality: 90)
				}
			}
		}
	`);

	//TODO: fade in logo, before migration to gatsby-plugin-image fadein was set to true. Klara. 2023-11-15
	return (
		<StyledDiv>
			<Link to="/">
				<motion.div initial="hidden">
					<GatsbyImage
						image={data.placeholderImage.childImageSharp.gatsbyImageData}
						alt="Etimo logo"
					/>
				</motion.div>
			</Link>
		</StyledDiv>
	);
};

export default HeaderLogo;
