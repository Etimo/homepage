import React from 'react';
import { Caption, DashedP, H2, H4, Span } from '../../elements';
import Section from '../Section';

const Competences = () => {
	return (
		<Section style={{ backgroundColor: 'white' }}>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden">
				<Caption>Områden</Caption>
				<H2>
					Exempel på våra <Span secondary>kompetenser</Span>
				</H2>
				<div className="flex flex-col lg:flex-row mt-6 lg:mt-10 mx-auto lg:mx-0 lg:w-full">
					<div className="lg:w-1/3">
						<H4>Innovation</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>Analys</DashedP>
							<DashedP>Produktstrategi</DashedP>
							<DashedP>Produktdesign</DashedP>
						</div>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-0">
						<H4>Arkitektur</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>Mikrotjänster</DashedP>
							<DashedP>Molnlösningar</DashedP>
							<DashedP>Skalbarhet</DashedP>
						</div>
					</div>
					<div className="md:w-fc md:self-end lg:w-1/3 mt-6 lg:mt-0">
						<H4>Utveckling</H4>
						<div className="text-left mt-2 mx-auto w-fc">
							<DashedP>JavaScript, C#, Java, Python</DashedP>
							<DashedP>React, Angular, Express, .NET</DashedP>
							<DashedP>Agile, Azure, AWS, CI/CD, TDD</DashedP>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Competences;
