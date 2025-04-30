import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import DashedP from './DashedP';
import { FloatUp } from '../animations';
import { AnimatedH2, Caption, Span } from '../elements';

type Props = {
	sectionHeight: number;
};

const Container = styled.div`
	${tw`flex justify-center`}
	background-color: #f9f9f9;
`;

const Wrapper = styled.div`
	${tw`flex my-auto flex-col mx-4 max-w-[700px] text-center -translate-y-[40%] md:-translate-y-[20%]`}
`;

const CyanText = styled.span`
	${tw`text-cyan`}
`;

const Splash = ({ sectionHeight }: Props) => {
	return (
		<Container style={{ height: sectionHeight }}>
			<Wrapper>
				<FloatUp>
					<Caption>Konsulter som levererar</Caption>
				</FloatUp>

				<AnimatedH2 direction="left" className="text-4xl">
					Bättre mjukvara
				</AnimatedH2>
				<AnimatedH2 direction="right" className="text-4xl">
					<CyanText>för en bättre värld</CyanText>
				</AnimatedH2>
				<DashedP className="mt-10">
					Etimo är konsultbolaget med handplockad expertis inom utveckling och
					produkt som omvandlar komplexa tekniska utmaningar till hållbara
					affärsresultat och som bidrar till att göra samhället bättre.
				</DashedP>
			</Wrapper>
		</Container>
	);
};

export default Splash;
