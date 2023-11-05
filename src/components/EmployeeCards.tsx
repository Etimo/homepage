import React from 'react';
import { sizes } from '../helpers';
import { useViewportSize } from '../hooks';
import EmployeeCard from './EmployeeCard';

type Props = {
	employees: Employee[];
	employeePage?: boolean;
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

export default (props: Props) => {
	const { employees, employeePage } = props;

	const grid = `grid grid-flow-row gap-4 mt-6 mx-4 overflow-hidden grid-cols-2 md:grid-cols-4 md:gap-6 ${
		employeePage ? 'md:grid-rows-4' : 'md:grid-rows-2'
	}`;

	let [height, width] = useViewportSize();

	const isDesktop = () => width >= sizes().desktop;
	const isLaptopOrGreater = () => width >= sizes().laptop;
	const getMargins = () => (isDesktop() ? 252 : 242);
	const availableHeight =
		height < sizes().minimumHeight
			? sizes().minimumHeight
			: height - getMargins();
	const laptopGridStyle = { width: availableHeight * 2.2, maxWidth: 1024 - 32 };
	const mobileGridStyle = employeePage ? {} : { height: availableHeight * 1.5 };

	return (
		<div
			className={grid}
			style={isLaptopOrGreater() ? laptopGridStyle : mobileGridStyle}
		>
			{employees.map((employee) => (
				<EmployeeCard {...employee} key={employee.name} />
			))}
		</div>
	);
};
