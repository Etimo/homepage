import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { H1, P } from '../../elements';
import { sizes } from '../../helpers';
import { useViewportSize } from '../../hooks';
import Section from '../Section';

const GradientSpan = styled.span`
	background: linear-gradient(
		90deg,
		${(props) => props.theme.secondary} 0%,
		${(props) => props.theme.secondary} 100%
	);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	${tw`uppercase`};
`;

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

const IntroText = () => {
	const [h, width] = useViewportSize();

	return (
		<Section headerSpace>
			<motion.div
				className="flex container flex-col text-center w-4/5 md:w-450p lg:w-740p h-25r lg:h-auto justify-center"
				variants={parent}
				initial="init"
				animate="anim"
			>
				<H1>
					<GradientSpan>Karriär</GradientSpan>
				</H1>
				<P>
					Hos oss tillhör du ett gäng som förändrar framtiden och har vilja att
					skapa samhällsnytta. <br />
					{width < sizes().tablet && <br />}
					Det är det som binder oss samman, tillsammans med den ständiga
					nyfikenheten för innovation, {width >= sizes().tablet && <br />}
					kunskap och möjlighet att skapa värde för våra kunder.
				</P>
			</motion.div>
		</Section>
	);
};

export default IntroText;
