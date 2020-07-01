import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FloatInDir, FloatUp } from '../animations';
import { AnimatedH2, Caption, Span } from '../elements';
import Section from './Section';

/* max-width: 150px; */
const ImageDiv = styled.div`
	${tw`mx-auto w-full max-w-xxxxxs md:max-w-xxxxs lg:max-w-xxxs opacity-50 hover:opacity-100`};
	${tw`transition-opacity ease-in-out duration-200`};
`;

export default () => {
	const data = useStaticQuery(graphql`
		query {
			tele2: file(relativePath: { eq: "customers/modified/tele2.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			blocket: file(relativePath: { eq: "customers/modified/blocket.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			qliro: file(relativePath: { eq: "customers/modified/qliro.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			karma: file(relativePath: { eq: "customers/modified/karma.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			mira: file(relativePath: { eq: "customers/modified/mira.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			nobina: file(relativePath: { eq: "customers/modified/nobina.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			quinyx: file(relativePath: { eq: "customers/modified/quinyx.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			seb: file(relativePath: { eq: "customers/modified/seb.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 100) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

	const customers = [
		{
			name: 'Blocket',
			url: 'https://www.blocket.se/',
			image: <Img fluid={data.blocket.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Karma',
			url: 'https://karma.life/sv/',
			image: <Img fluid={data.karma.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'down',
		},
		{
			name: 'Tele2',
			url: 'https://www.tele2.se/',
			image: <Img fluid={data.tele2.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'down',
		},
		{
			name: 'Mira',
			url: 'https://www.mira.se/',
			image: <Img fluid={data.mira.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Qliro',
			url: 'https://www.qliro.com/sv-se',
			image: <Img fluid={data.qliro.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: 'lg:border-b-0 ',
			},
			direction: 'right',
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: <Img fluid={data.seb.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-b-0 lg:border-r',
			},
			direction: 'up',
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: <Img fluid={data.quinyx.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: <Img fluid={data.nobina.childImageSharp.fluid} />,
			borders: {
				xs: '',
				sm: '',
			},
			direction: 'left',
		},
	];

	return (
		<Section>
			<div className="container mx-auto xl:px-12">
				<div className="flex flex-col mb-8">
					<FloatUp>
						<Caption className="text-center">Kunder</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Ett urval av</AnimatedH2>
						<AnimatedH2 direction="right">
							&nbsp;våra <Span secondary> kunder</Span>
						</AnimatedH2>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mx-8 xl:mx-12">
						{customers.map((customer, idx) => {
							const classes = `${customer.borders.xs} ${customer.borders.sm} border-gray-300 py-2 lg:py-4 overflow-hidden`;

							return (
								<div className={classes}>
									<FloatInDir
										direction={customer.direction}
										delay={idx * 0.075}
									>
										<ImageDiv>
											<a href={customer.url} target="_blank">
												{customer.image}
											</a>
										</ImageDiv>
									</FloatInDir>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Section>
	);
};
