import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import Span from '../elements/Span';
import EmployeeCards, { Employee } from './Employees/EmployeeCards';
import Section from './Section';

const StyledImg = styled(GatsbyImage)`
	${tw`max-w-sm h-full`};
`;

type FunAtWorkProps = {
	sectionHeight: number;
};

export const FunAtWork = (props: FunAtWorkProps) => {
	const { sectionHeight } = props;
	const data = useStaticQuery(graphql`
		query {
			cloud: file(relativePath: { eq: "funatwork/new/danielochsaga.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			boardgame: file(relativePath: { eq: "funatwork/new/bradspelsgang.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			afterski: file(relativePath: { eq: "funatwork/new/afterski.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			jassyr: file(relativePath: { eq: "funatwork/new/jassyr.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			andre: file(relativePath: { eq: "funatwork/new/andre.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			pillows: file(relativePath: { eq: "funatwork/new/danielochlukas.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			rickard: file(relativePath: { eq: "funatwork/new/rickardny.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			italy: file(relativePath: { eq: "funatwork/new/italienvandring.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			moon: file(relativePath: { eq: "funatwork/new/joakimochbjorn.jpeg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			dolceaqua: file(relativePath: { eq: "funatwork/new/italien.JPG" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			rest: file(relativePath: { eq: "funatwork/new/johan.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			disco: file(relativePath: { eq: "funatwork/new/jeanette.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			rest: file(relativePath: { eq: "funatwork/new/johan.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
			disco: file(relativePath: { eq: "funatwork/new/jeanette.jpg" }) {
				childImageSharp {
					gatsbyImageData(layout: CONSTRAINED, width: 370, quality: 90)
				}
			}
		}
	`);

	const cards: Employee[] = [
		{
			name: 'BJÖRN & JOAKIM',
			title: 'På månen',
			image: (
				<StyledImg
					image={data.moon.childImageSharp.gatsbyImageData}
					alt="På månen"
				/>
			),
		},
		{
			name: 'JOHAN',
			title: 'Njuter av lugnet',
			image: (
				<StyledImg
					image={data.rest.childImageSharp.gatsbyImageData}
					alt="Johan njuter av lugnet"
				/>
			),
		},
		{
			name: 'KOLLEGOR',
			title: 'På pit stop i Åre',
			image: (
				<StyledImg
					image={data.afterski.childImageSharp.gatsbyImageData}
					alt="Kollegor på pit-stop i Åre"
				/>
			),
		},
		{
			name: 'DANIEL & SAGA',
			title: 'Laddar upp i molnet',
			image: (
				<StyledImg
					image={data.cloud.childImageSharp.gatsbyImageData}
					alt="Daniel och Saga laddar upp i molnet"
				/>
			),
		},
		{
			name: 'JEANETTE',
			title: 'DJ:ar i rinken',
			image: (
				<StyledImg
					image={data.disco.childImageSharp.gatsbyImageData}
					alt="Jeanette dj:ar i rinken"
				/>
			),
		},
		{
			name: 'DANIEL & LUKAS',
			title: 'Njuter i kuddhavet',
			image: (
				<StyledImg
					image={data.pillows.childImageSharp.gatsbyImageData}
					alt="Daniel och Lukas i kuddhavet"
				/>
			),
		},
		{
			name: 'GÄNGET',
			title: 'På brädspelskväll',
			image: (
				<StyledImg
					image={data.boardgame.childImageSharp.gatsbyImageData}
					alt="Gänget på brädspelskväll"
				/>
			),
		},
		{
			name: 'ANDRÈ',
			title: 'Kaffepaus i glitterboxen',
			image: (
				<StyledImg
					image={data.andre.childImageSharp.gatsbyImageData}
					alt="Kaffepaus i glitterboxen"
				/>
			),
		},
	];

	return (
		<Section sectionHeight={sectionHeight} style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-12 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<FloatUp>
						<Caption className="text-center">Kul</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center h-24">
						<AnimatedH2 direction="left">
							Kul <Span>på</Span>
						</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span>&nbsp;jobbet</Span>
						</AnimatedH2>
					</div>
					<EmployeeCards employees={cards} employeePage={false} />
				</div>
			</div>
		</Section>
	);
};
