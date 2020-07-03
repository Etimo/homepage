import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { P } from '../../elements';
import Section from '../Section';

const GradientSpan = styled.span`
	background: linear-gradient(
		90deg,
		${(props) => props.theme.secondary} 0%,
		${(props) => props.theme.primary} 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const H1 = styled(motion.h1)`
	${tw`font-quest text-5xl md:text-6xl lg:text-8xl xl:text-10xl overflow-hidden self-center`};
`;

const IntroText = () => {
	const parent = {
		init: { opacity: 0 },
		anim: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.8,
			},
		},
	};

	return (
		<Section headerSpace>
			<motion.div
				className="flex container flex-col text-center w-4/5 md:w-3/5 xl:w-1/2"
				variants={parent}
				initial="init"
				animate="anim"
			>
				<H1>
					<GradientSpan>Karriär</GradientSpan>
				</H1>
				<P className="mt-4 md:mt-8 lg:mt-12 xl:mt-20">
					Hos oss tillhör du ett gäng som förändrar framtiden och har vilja att
					skapa samhällsnytta. <br /> Det är det som binder oss samman med den
					ständiga nyfikenheten för innovation,
					<br /> kunskap och möjlighet att skapa värde för våra kunder.
				</P>
			</motion.div>
		</Section>
	);
};

export default IntroText;
