import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useViewportSize } from '../hooks';

type FloatDirection = 'left' | 'right' | 'up' | 'down';

type Props = {
	children: React.ReactNode;
	direction: FloatDirection;
	delay?: number;
};

export default ({ children, direction, delay, ...props }: Props) => {
	const [ref, inView] = useInView();
	const [_, width] = useViewportSize();
	let xDir = '0',
		yDir = '0';
	switch (direction) {
		case 'up': {
			yDir = '100%';
			break;
		}
		case 'down': {
			yDir = '-100%';
			break;
		}
		case 'left': {
			xDir = '100%';
			break;
		}
		case 'right': {
			xDir = '-99%';
			break;
		}
	}

	return (
		<motion.div
			{...props}
			ref={ref}
			initial={{
				y: yDir,
				x: xDir,
			}}
			animate={
				inView
					? {
							y: 0,
							x: 0,
					  }
					: {}
			}
			transition={{
				duration: 0.8,
				type: 'tween',
				delay,
			}}
		>
			{children}
		</motion.div>
	);
};
