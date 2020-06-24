import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
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

const CardsGrid = styled.div`
	${tw`grid grid-flow-col grid-cols-2 grid-rows-3 gap-4 mt-6 mx-4`};
	${tw`md:grid-cols-3 lg:grid-cols-fitting md:grid-rows-2 md:gap-6 lg:justify-center`};
`;

export default (props: Props) => {
	const { employees } = props;

	return (
		<CardsGrid>
			{employees.map((employee) => (
				<EmployeeCard {...employee} key={employee.name} />
			))}
		</CardsGrid>
	);
};
