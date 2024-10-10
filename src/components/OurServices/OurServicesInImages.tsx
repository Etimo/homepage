import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { ServiceImageContainer } from './ServiceImageContainer';

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
	${tw`font-quest text-center align-bottom bg-white bg-opacity-25 p-2`};
`;

export type ServiceType = {
	image: JSX.Element;
};

export const OurServicesInImages = () => {
	const [ref, inView] = useInView({ triggerOnce: true });

	const data = useStaticQuery(graphql`
		query {
			developer: file(relativePath: { eq: "services/developerv2.jpeg" }) {
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

	return (
		<motion.div
			className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0 mx-6 overflow-hidden"
			ref={ref}
			variants={gridVar}
			initial="init"
			animate={inView ? 'anim' : ''}
		>
			<ServiceImageContainer>
				<GatsbyImage
					alt="fyra personer som tittar på dataskärmar och pratar"
					image={data.developerTeam.childImageSharp.gatsbyImageData}
					className="opacity-100 aspect-4/3 object-bottom"
				/>

				<H3Title className="absolute w-full">Utvecklingsteam</H3Title>
			</ServiceImageContainer>

			<ServiceImageContainer>
				<GatsbyImage
					alt="två personer som pratar"
					image={data.leadership.childImageSharp.gatsbyImageData}
					className="opacity-100  aspect-4/3"
				/>

				<H3Title className="absolute w-full">
					Ledarskap och förändringsarbete
				</H3Title>
			</ServiceImageContainer>

			<ServiceImageContainer>
				<GatsbyImage
					alt="två utvecklare framför en datorskärm"
					image={data.developer.childImageSharp.gatsbyImageData}
					className="opacity-100  aspect-4/3"
				/>

				<H3Title className="absolute w-full">Utvecklare</H3Title>
			</ServiceImageContainer>

			<ServiceImageContainer>
				<GatsbyImage
					alt="produktledning"
					image={data.productManagement.childImageSharp.gatsbyImageData}
					className="opacity-100  aspect-4/3"
				/>

				<H3Title className="absolute w-full">Produktledning</H3Title>
			</ServiceImageContainer>
		</motion.div>
	);
};
