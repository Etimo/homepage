import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';
import BlurIn from '../../animations/variants/BlurIn';
import { graphql, useStaticQuery } from 'gatsby';
import { convertToBgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import BackgroundImage from 'gatsby-background-image';
import { CyanHover } from '../../animations';

const gridVar = {
	init: {},
	anim: {
		transition: {
			delay: 0.8,
			staggerChildren: 0.5,
		},
	},
};

const H3Title = styled.h3`
	${tw`font-quest text-xl lg:text-2xl text-center align-bottom bg-white bg-opacity-75 p-2`};
`;

export type ServiceType = {
	image: JSX.Element;
};

const getBackgroundImages = () => {
	const data = useStaticQuery(graphql`
		query {
			developer: file(relativePath: { eq: "services/developer.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			developerTeam: file(relativePath: { eq: "services/developer-team.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			productManagement: file(
				relativePath: { eq: "services/product-management.jpg" }
			) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			leadership: file(relativePath: { eq: "services/leadership.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
		}
	`);

	return {
		developerTeam: convertToBgImage(getImage(data.developerTeam)),
		developer: convertToBgImage(getImage(data.developer)),
		productManagement: convertToBgImage(getImage(data.productManagement)),
		leadership: convertToBgImage(getImage(data.leadership)),
	};
};

export const OurServicesInImages = () => {
	const [ref, inView] = useInView({ triggerOnce: true });
	const backgroundImages = getBackgroundImages();

	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mx-6 overflow-hidden"
			ref={ref}
			variants={gridVar}
			initial="init"
			animate={inView ? 'anim' : ''}
		>
			<motion.div className="flex flex-col lg:m-4 h-full" variants={BlurIn()}>
				<BackgroundImage {...backgroundImages.developerTeam}>
					<CyanHover className="h-full min-h-350p align-bottom opacity-80">
						<H3Title>Utvecklingsteam</H3Title>
					</CyanHover>
				</BackgroundImage>
			</motion.div>

			<motion.div className="flex flex-col lg:m-4 h-full" variants={BlurIn()}>
				<BackgroundImage {...backgroundImages.developer}>
					<CyanHover className="h-full min-h-350p opacity-80">
						<H3Title>Utvecklare</H3Title>
					</CyanHover>
				</BackgroundImage>
			</motion.div>

			<motion.div className="flex flex-col lg:m-4 h-full" variants={BlurIn()}>
				<BackgroundImage {...backgroundImages.productManagement}>
					<CyanHover className="h-full min-h-350p opacity-80">
						<H3Title>Produktledning</H3Title>
					</CyanHover>
				</BackgroundImage>
			</motion.div>

			<motion.div className="flex flex-col lg:m-4 h-full" variants={BlurIn()}>
				<BackgroundImage {...backgroundImages.leadership}>
					<CyanHover className="h-full min-h-350p opacity-80">
						<H3Title>Ledarskap och förändringsarbete</H3Title>
					</CyanHover>
				</BackgroundImage>
			</motion.div>
		</motion.div>
	);
};
