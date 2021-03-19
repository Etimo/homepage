import { motion, useAnimation } from 'framer-motion';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
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
	{
		placeholderImage: file(relativePath: {eq: "etimo-logo.png"}) {
			childImageSharp {
				gatsbyImageData(width: 200, placeholder: TRACED_SVG, layout: CONSTRAINED)
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
					<GatsbyImage
						image={data.placeholderImage.childImageSharp.gatsbyImageData}
						fadeIn
						onLoad={useEffect} />
				</motion.div>
			</Link>
		</StyledDiv>
    );
};

export default HeaderLogo;
