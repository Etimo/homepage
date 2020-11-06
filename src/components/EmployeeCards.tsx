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

	const isDesktop = () => width >= sizes().desktop;
	const isLaptopOrGreater = () => width >= sizes().laptop;
	const getMargins = () => isDesktop() ? 252 : 242;
	const availableHeight = height < sizes().minimumHeight ? sizes().minimumHeight : height - getMargins();
	const gridStyle = { width: availableHeight * 1.2, maxWidth: 1024 - 32 };

	return (
		<CardsGrid style={isLaptopOrGreater() ? gridStyle : {}}>
			{employees.map((employee) => (
				<EmployeeCard {...employee} key={employee.name} />
			))}
		</CardsGrid>
	);
};
