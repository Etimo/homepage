import React from 'react';
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

export default (props: Props) => {
	const { employees } = props;

	return (
		<div className="grid grid-flow-col grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-6 mt-6 mx-4">
			{employees.map((employee) => (
				<EmployeeCard {...employee} key={employee.name} />
			))}
		</div>
	);
};
