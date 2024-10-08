import { motion, Variants } from 'framer-motion';
import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

type Props = {
	children: React.ReactNode;
	className?: string;
	variants?: Variants;
};

export default ({ children, className, ...props }: Props) => {
	const isMobile = useIsMobile();
	return (
		<motion.div
			className={className}
			{...props}
			whileHover={
				isMobile
					? {}
					: {
							backgroundColor: '#42c8ad',
							boxShadow: '0px 5px 10px 1px rgba(0,0,0,0.2)',
							borderColor: '#42c8ad',
					  }
			}
			transition={{
				ease: 'easeOut',
				duration: 0.3,
				type: 'tween',
			}}
		>
			{children}
		</motion.div>
	);
};
