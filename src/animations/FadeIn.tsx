import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

type FadeInDirection = 'left' | 'right';

type Props = {
	children: React.ReactNode;
	direction: FadeInDirection;
	className?: string;
};

export default ({ children, direction, ...props }: Props) => {
	const [entered, setEntered] = useState(false);
	const [ref, inView] = useInView({ triggerOnce: true });
	const xDir = direction === 'left' ? '-20%' : '20%';

	useEffect(() => {
		if (inView && !entered) {
			setEntered(true);
		}
	}, [inView, entered]);

	return (
		<motion.div
			className="h-full w-full"
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
