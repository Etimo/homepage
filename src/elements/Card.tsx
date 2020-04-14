import React from 'react';
import styled from 'styled-components';

const CardComponent = styled.div`
	border-radius: 2px;
	margin: auto;
	padding: 0;
	width: 100%;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
`;

type Props = {
	className?: string;
	children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
	return <CardComponent className={className}>{children}</CardComponent>;
};

export default Card;
