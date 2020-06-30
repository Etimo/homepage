import React from 'react';
import { useInView } from 'react-intersection-observer';
import H2 from '../elements/H2';

type FadeInDirection = 'left' | 'right';

type Props = {
	children: React.ReactNode;
	direction: FadeInDirection;
	className?: string;
};

export default ({ children, className, direction, ...props }: Props) => {
	const [ref, inView] = useInView();
	const xDir = direction === 'left' ? '-20%' : '20%';

	const fadeVar = {
		anim: {
			opacity: 1,
			x: 0,
			transition: { type: 'tween', delay: 0.3, duration: 0.8 },
		},
		init: { opacity: 0, x: xDir },
	};

	return (
		<H2
			{...props}
			ref={ref}
			variants={fadeVar}
			initial="init"
			animate={inView ? 'anim' : ''}
			className={className}
		>
			{children}
		</H2>
	);
};

/* 
   <motion.div
			className={className}
			{...props}
			whileHover={{
				backgroundColor: '#42c8ad',
				boxShadow: '0px 5px 10px 1px rgba(0,0,0,0.2)',
				borderColor: '#42c8ad',
			}}
			transition={{
				ease: 'easeOut',
				duration: 0.3,
				type: 'tween',
			}}
		>
			
      </motion.div>
      */
