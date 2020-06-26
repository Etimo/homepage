import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Caption from '../elements/Caption';
import H2 from '../elements/H2';
import P from '../elements/P';
import Span from '../elements/Span';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import EmployeeCard from './EmployeeCard';
import { Employee } from './EmployeeCards';
import Section from './Section';

const StyledImg = styled(Img)`
	${tw`max-w-sm`};
`;

const SmallerH2 = styled(H2)`
	${tw`text-xl mt-1 tracking-widest`};
`;

const SpacedP = styled(P)`
	${tw`tracking-widest pb-2`};
`;

export default () => {
	const data = useStaticQuery(graphql`
		query {
			erikLogo: file(
				relativePath: { eq: "funatwork/erik-malm-1-logo-370x262.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			streetOne: file(relativePath: { eq: "funatwork/gatan-1-370x262.png" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			johanHazelius: file(
				relativePath: { eq: "funatwork/johan-hazelius-1-370x262.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			etimoChefs: file(
				relativePath: { eq: "funatwork/etimo-kockar-1-370x262.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			employeesOne: file(
				relativePath: { eq: "funatwork/kollegor-1-370x262.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			lukasLindqvist: file(
				relativePath: { eq: "funatwork/lukas-lindqvist-1-pengar-370x262.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const cards: Employee[] = [
		{
			name: 'ERIK',
			title: 'Dricker kaffe',
			image: <StyledImg fluid={data.erikLogo.childImageSharp.fluid} />,
		},
		{
			name: 'HELA GÄNGET',
			title: 'Lagar mat',
			image: <StyledImg fluid={data.etimoChefs.childImageSharp.fluid} />,
		},
		{
			name: 'JOHAN',
			title: 'Fokuserar',
			image: <StyledImg fluid={data.johanHazelius.childImageSharp.fluid} />,
		},
		{
			name: 'LUKAS',
			title: 'Fångar pengar på ett event',
			image: <StyledImg fluid={data.lukasLindqvist.childImageSharp.fluid} />,
		},
		{
			name: 'GATAN',
			title: 'Här ligger kontoret. Det blir en del fika från Vete-Katten.',
			image: <StyledImg fluid={data.streetOne.childImageSharp.fluid} />,
		},
		{
			name: 'KOLLEGOR',
			title: 'Är på konferens',
			image: <StyledImg fluid={data.employeesOne.childImageSharp.fluid} />,
		},
	];

	const [h, width] = useViewportSize();

	/* 6:1 until sm then 3x2 until md then 2x3*/
	/* px: 15px, mb: 30px */
	/* banners up until lg, lg+ uses hover */
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container xl:px-12">
				<div className="flex flex-col text-center">
					<Caption>Kul</Caption>
					<H2>
						Kul <Span secondary>på jobbet</Span>
					</H2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 mx-4 sm:mx-8 xl:mx-20 gap-8">
						{width >= sizes().laptop &&
							/* Hover effect */
							cards.map((card) => <EmployeeCard {...card} key={card.name} />)}

						{width < sizes().laptop &&
							/* Banners */
							cards.map((card) => {
								return (
									<div className="flex flex-col">
										{card.image}
										<div className="bg-cyan px-3">
											<SmallerH2>{card.name}</SmallerH2>
											<SpacedP>{card.title}</SpacedP>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</Section>
	);
};
