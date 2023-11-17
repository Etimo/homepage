import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import Box, { BoxProps } from '../elements/Box';

type FadeInDirection = 'left' | 'right';

type Props = {
	children: React.ReactNode;
	direction: FadeInDirection;
};
// const MotionBox = motion(Box, { forwardMotionProps: true });

export default ({ children, direction, ...props }: Props & BoxProps) => {
	const [entered, setEntered] = useState(false);
	const [ref, inView] = useInView();
	const xDir = direction === 'left' ? '-20%' : '20%';

	useEffect(() => {
		if (inView && !entered) {
			setEntered(true);
		}
	}, [inView, entered]);

	return (
		<motion.div
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
		</motion.div>
	);
};
