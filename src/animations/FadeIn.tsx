import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Box, { BoxProps } from '../elements/Box';
import styled from 'styled-components';

type FadeInDirection = 'left' | 'right';

type StyleProps = {
	full?: boolean;
};

type Props = {
	children: React.ReactNode;
	direction: FadeInDirection;
} & StyleProps;

const MotionBox = motion.custom(styled(Box)<StyleProps>`
	height: ${({ full }) => full && '100%'};
	width: ${({ full }) => full && '100%'};
`);

export default ({ full, children, direction, ...props }: Props & BoxProps) => {
	const [entered, setEntered] = useState(false);
	const [ref, inView] = useInView();
	const xDir = direction === 'left' ? '-20%' : '20%';

	useEffect(() => {
		if (inView && !entered) {
			setEntered(true);
		}
	}, [inView, entered]);

	return (
		<MotionBox
			full={full}
			{...props}
			ref={ref}
			animate={entered ? 'enter' : 'exit'}
			variants={{
				enter: {
					opacity: 1,
					x: 0,
					transition: { type: 'tween', delay: 0.3, duration: 0.8 },
				},
				exit: { opacity: 0, x: xDir },
			}}
		>
			{children}
		</MotionBox>
	);
};
