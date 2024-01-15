import React from 'react';
import FadeIn from '../../animations/FadeIn';
import Caption from '../../elements/Caption';
import P from '../../elements/P';
import Span from '../../elements/Span';
import Section from '../Section';
import EmphasizedH2 from '../../elements/EmphasizedH2';

const ReferenceCase = () => {
	return (
		<Section style={{ background: 'white' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn direction="left">
						<Caption className="text-center lg:text-left">
							Ett av våra kunduppdrag
						</Caption>
						<EmphasizedH2>
							Referenscase: <br />
							<Span>Migrering till molnet</Span>
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
