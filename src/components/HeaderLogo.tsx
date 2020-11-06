import { motion, useAnimation } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledDiv = styled.div`
	${tw`fixed top-23px md:top-23px lg:top-47px z-50`}
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
