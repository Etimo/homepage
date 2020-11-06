import { motion, useAnimation } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

	const controls = useAnimation()

	function useEffect() {
		controls.start(i => ({
		  opacity: 1
		}))
	}

	return (
		<StyledDiv>
			<Link to="/">
				<motion.div initial={{ opacity: 0 }} animate={controls}>
					<Img fadeIn fluid={data.placeholderImage.childImageSharp.fluid} onLoad={useEffect} />
				</motion.div>
			</Link>
		</StyledDiv>
	);
};

export default HeaderLogo;
