import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { H2, P } from '../../elements';
import Section from '../Section';

const GradientSpan = styled.span`
	border-bottom: 1px solid;
	background: linear-gradient(
		90deg,
		${(props) => props.theme.primary} 49%,
		${(props) => props.theme.secondary} 50%
	);
	background-size: 200% auto;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	${tw`border-blackGray ease-in duration-200 bg-right lg:bg-left hover:bg-right `};
`;

const IntroText = () => {
	return (
		<Section headerSpace style={{ height: 'auto' }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center">
				<H2>Karriär</H2> {/* H1 */}
				<P>Introducerande text om Etimo, hehe.</P>
			</div>
		</Section>
	);
};

export default IntroText;
