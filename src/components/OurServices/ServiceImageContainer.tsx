import BlurIn from '../../animations/variants/BlurIn';
import { motion } from 'framer-motion';
import React from 'react';

type ServiceImageContainerProps = {
	children?: React.ReactNode;
};

export const ServiceImageContainer = (props: ServiceImageContainerProps) => {
	const { children } = props;
	return (
		<div className="overflow-hidden lg:m-4">
			<motion.div className="flex flex-col h-full" variants={BlurIn()}>
				{children}

				<motion.div
					className="absolute w-full h-full"
					whileHover={{
						backgroundColor: '#42c8ad',
						boxShadow: '0px 5px 10px 1px rgba(0,0,0,0.2)',
						borderColor: '#42c8ad',
						opacity: 0.8,
					}}
					transition={{
						ease: 'easeOut',
						duration: 0.3,
						type: 'tween',
					}}
				/>
			</motion.div>
		</div>
	);
};
