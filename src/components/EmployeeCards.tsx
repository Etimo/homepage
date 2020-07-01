import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import EmployeeCard from './EmployeeCard';

type Props = {
	employees: Employee[];
};

export type Employee = {
	name: string;
	title: string;
	github?: string;
	stackOverflow?: string;
	linkedin?: string;
	twitter?: string;
	image: React.ReactNode;
};

const CardsGrid = styled(motion.div)`
	${tw`grid grid-flow-col grid-cols-2 grid-rows-3 gap-4 mt-6 mx-4 overflow-hidden`};
	${tw`md:grid-cols-3 md:grid-rows-2 md:gap-6`};
`;

export default (props: Props) => {
	const { employees } = props;

	let [height, width] = useViewportSize();

	/** Takes caption, title, margins etc into consideration */
	const availHeight =
		height - (width >= sizes().desktop ? 252 /* Desktop */ : 242); /* Laptop */

	/** Only applied if screen is larger than laptop */
	const gridStyle =
		width >= sizes().laptop
			? { width: availHeight * 1.2, maxWidth: 1024 - 32 }
			: {};

	return (
		<CardsGrid style={gridStyle}>
			{employees.map((employee) => (
				<EmployeeCard {...employee} key={employee.name} />
			))}
		</CardsGrid>
	);
};
