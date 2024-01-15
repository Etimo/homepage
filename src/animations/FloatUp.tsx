import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export default ({ children, className, ...props }: Props) => {
	const [ref, inView] = useInView({ triggerOnce: true });
	const [_, width] = useViewportSize();

	return (
		<motion.div
			className={className ?? '' + ' overflow-hidden'}
			{...props}
			ref={ref}
			initial={{
				y: width >= sizes().laptop ? 40 : 25,
				opacity: 0,
			}}
			animate={
				inView
					? {
							y: 0,
							opacity: 1,
							originY: 0,
					  }
					: {}
			}
			transition={{
				duration: 0.8,
				type: 'tween',
				delay: 0.3,
			}}
		>
			{children}
		</motion.div>
	);
};
