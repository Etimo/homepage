import React from 'react';
import { FloatInDir } from '../../animations';
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
						<FloatInDir direction="right">
							<H4>Innovation</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>Analys</DashedP>
								<DashedP>Produktstrategi</DashedP>
								<DashedP>Produktdesign</DashedP>
							</div>
						</FloatInDir>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-0 overflow-hidden">
						<FloatInDir direction="up">
							<H4>Arkitektur</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>Mikrotjänster</DashedP>
								<DashedP>Molnlösningar</DashedP>
								<DashedP>Skalbarhet</DashedP>
							</div>
						</FloatInDir>
					</div>
					<div className="lg:w-1/3 mt-6 lg:mt-0">
						<FloatInDir direction="left">
							<H4>Utveckling</H4>
							<div className="text-left mt-2 inline-block">
								<DashedP>JavaScript, C#, Java, Python</DashedP>
								<DashedP>React, Angular, Express, .NET</DashedP>
								<DashedP>Agile, Azure, AWS, CI/CD, TDD</DashedP>
							</div>
						</FloatInDir>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Competences;
