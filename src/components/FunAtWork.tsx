import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FloatUp from '../animations/FloatUp';
import AnimatedH2 from '../elements/AnimatedH2';
import Caption from '../elements/Caption';
import Span from '../elements/Span';
import EmployeeCards, { Employee } from './EmployeeCards';
import Section from './Section';

const StyledImg = styled(Img)`
	${tw`max-w-sm h-full`};
`;

export default () => {
	const data = useStaticQuery(graphql`
		query {
			cloud: file(relativePath: { eq: "funatwork/new/danielochsaga.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bradspel: file(relativePath: { eq: "funatwork/new/bradspelsgang.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			afterski: file(relativePath: { eq: "funatwork/new/afterski.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			jassyr: file(relativePath: { eq: "funatwork/new/jassyr.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			andre: file(relativePath: { eq: "funatwork/new/andre.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			pillows: file(relativePath: { eq: "funatwork/new/danielochlukas.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			rickard: file(relativePath: { eq: "funatwork/new/rickardny.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
			chess: file(relativePath: { eq: "funatwork/new/niclas.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 370, quality: 90) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const cards: Employee[] = [
		{
			name: 'RICKARD',
			title: 'På månen',
			image: <StyledImg fluid={data.rickard.childImageSharp.fluid} />,
		},
		{
			name: 'DANIEL & LUKAS',
			title: 'Njuter i kuddhavet',
			image: <StyledImg fluid={data.pillows.childImageSharp.fluid} />,
		},
		{
			name: 'KOLLEGOR',
			title: 'På pit stop i Åre',
			image: <StyledImg fluid={data.afterski.childImageSharp.fluid} />,
		},
		{
			name: 'GÄNGET',
			title: 'Morgan vinner brädspelskvällen!',
			image: <StyledImg fluid={data.bradspel.childImageSharp.fluid} />,
		},
		{
			name: 'JASSYR',
			title: 'Vidgar vyerna på Island',
			image: <StyledImg fluid={data.jassyr.childImageSharp.fluid} />,
		},
		{
			name: 'ALFRED & NICLAS',
			title: 'Schack matt',
			image: <StyledImg fluid={data.chess.childImageSharp.fluid} />,
		},
		{
			name: 'DANIEL & SAGA',
			title: 'Laddar upp i molnet',
			image: <StyledImg fluid={data.cloud.childImageSharp.fluid} />,
		},
		{
			name: 'ANDRÈ',
			title: 'Kaffepaus i glitterboxen',
			image: <StyledImg fluid={data.andre.childImageSharp.fluid} />,
		},
	];

	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="container mx-auto xl:px-12 lg:h-full lg:overflow-hidden">
				<div className="flex flex-col mb-8 lg:h-95 lg:max-h-95 lg:justify-center lg:items-center">
					<FloatUp>
						<Caption className="text-center">Kul</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center h-24">
						<AnimatedH2 direction="left">
							Kul <Span secondary>på</Span>
						</AnimatedH2>
						<AnimatedH2 direction="right">
							<Span secondary>&nbsp;jobbet</Span>
						</AnimatedH2>
					</div>
					<EmployeeCards employees={cards} employeePage={false} />
				</div>
			</div>
		</Section>
	);
};
