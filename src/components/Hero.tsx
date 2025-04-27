import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import DashedP from './DashedP';

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

const Heading = styled.h1`
	${tw`font-quest text-4xl md:text-5xl xl:text-6xl leading-tight overflow-hidden break-words hyphens-auto`}
`;

const CyanText = styled.span`
	${tw`text-cyan`}
`;

const Splash = ({ sectionHeight }: Props) => {
	return (
		<Container style={{ height: sectionHeight }}>
			<Wrapper>
				<Heading>
					Konsulter som bygger{' '}
					<CyanText>bättre mjukvara för en bättre värld</CyanText>
				</Heading>
				<DashedP className="mt-10">
					Etimo är konsultbolaget med handplockad senior expertis inom
					utveckling och produkt. Vi omvandlar komplexa tekniska utmaningar till
					lösningar som driver tillväxt, effektivitet och konkurrenskraft.
				</DashedP>
			</Wrapper>
		</Container>
	);
};

export default Splash;
