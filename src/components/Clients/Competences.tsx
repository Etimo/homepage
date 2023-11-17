import React from 'react';
import { FloatInDir, FloatUp } from '../../animations';
import { AnimatedH2, Caption, DashedP, H4, Span } from '../../elements';
import Section from '../Section';

const Competences = () => {
	return (
		<Section style={{ background: 'white' }}>
			<div className="flex container flex-col px-8 xl:px-32 text-center overflow-hidden">
				<FloatUp>
					<Caption>Områden</Caption>
				</FloatUp>
				<div className="flex flex-col md:flex-row justify-center">
					<AnimatedH2 direction="left">Exempel på våra&nbsp;</AnimatedH2>
					<AnimatedH2 direction="right">
						<Span>kompetenser</Span>
					</AnimatedH2>
				</div>
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
