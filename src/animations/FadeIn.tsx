import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Box, { BoxProps } from '../elements/Box';

type FadeInDirection = 'left' | 'right';

type Props = {
	children: React.ReactNode;
	direction: FadeInDirection;
};

const MotionBox = motion.custom(Box);

export default ({ children, direction, ...props }: Props & BoxProps) => {
	const [entered, setEntered] = useState(false);
	const [ref, inView] = useInView();
	const xDir = direction === 'left' ? '-100%' : '100%';

	useEffect(() => {
		if (inView && !entered) {
			setEntered(true);
		}
	}, [inView, entered]);

	return (
		<MotionBox
			{...props}
			ref={ref}
			animate={entered ? 'enter' : 'exit'}
			variants={{
				enter: { opacity: 1, x: 0, transition: { delay: 0.3 } },
				exit: { opacity: 0, x: xDir },
			}}
		>
			{children}
		</MotionBox>
	);
};
