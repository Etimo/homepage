import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import FadeIn from '../../animations/FadeIn';
import Caption from '../../elements/Caption';
import H2 from '../../elements/H2';
import P from '../../elements/P';
import Span from '../../elements/Span';
import { useViewportSize } from '../../hooks';
import Section from '../Section';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	${tw`text-center lg:text-left md:mt-4 lg:mt-6 xl:mt-8`}
`;

const ReferenceCase = () => {
	const [h, width] = useViewportSize();
	return (
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn direction="left" flex flexDirection="column">
						<Caption className="text-center lg:text-left">
							Ett av våra kunduppdrag
						</Caption>
						<EmphasizedH2>
							Referenscase: <br />
							<Span secondary>Migrering till molnet</Span>
						</EmphasizedH2>
					</FadeIn>
				</div>

				<div className="md:w-1/2 text-center sm:text-left">
					<FadeIn direction="right">
						<P className="mt-6  md:mt-0" style={{ textAlign: 'justify' }}>
							Detta uppdrag handlade om DevOps-aktiviteter vilket vår konsult
							tyckte var en rolig variation. Kunden är i en moderniseringsfas
							där man går från on-prem till molnet, både för utveckling och
							drift. De anlitade Etimo för en stor del av denna migrering.
							Teknik som användes under uppdraget var Azure DevOps, Git, C#,
							Visual Studio, vsix-paket för custom release tasks och TFS.
							<br /> <br />
							Resultat: <br />
							Kunden övergick till mer moderna molnbaserade verktyg och
							återanvändbara komponenter vilket har höjt effektiviteten och har
							frigjort mycket tid från driftavdelningen. Nu kan byggen och
							releaser sättas upp mycket snabbt och med högre kvalitet.
							Modifieringar som tidigare var omfattande och tidsödande görs nu i
							en enda av de återanvändbara komponenterna.
						</P>
					</FadeIn>
				</div>
			</div>
		</Section>
	);
};

export default ReferenceCase;
