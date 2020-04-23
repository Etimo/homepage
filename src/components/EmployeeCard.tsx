import React from 'react';
import { Employee } from './EmployeeCards';
import { motion } from 'framer-motion';
import { useHover } from 'react-use';

type Props = Employee;

export default (props: Props) => {
	const { name, image } = props;

	const container = {
		hidden: {
			backgroundColor: 'rgba(0, 0, 0, 0)',
		},
		show: {
			backgroundColor: 'rgba(60, 200, 173, 0.7)',
			transition: {
				duration: 0.2,
				staggerChildren: 0.2,
			},
		},
	};

	const item = {
		hidden: {
			opacity: 0,
			scale: 1.3,
			transition: { type: 'tween', duration: 0.2 },
		},
		show: {
			opacity: 1,
			scale: 1,
			transition: { type: 'tween', duration: 0.2 },
		},
	};

	const element = (hovered: boolean) => (
		<div className="relative shadow">
			<motion.div
				className="absolute flex content-center align-center items-center h-full top-0 bottom-0 right-0 left-0 z-10"
				initial="hidden"
				animate={hovered ? 'show' : 'hidden'}
				variants={container}
			>
				<motion.h3 variants={item} className="mx-auto text-2xl">
					{name}
				</motion.h3>
			</motion.div>
			{image}
		</div>
	);

	const [hoverable] = useHover(element);

	return hoverable;
};
