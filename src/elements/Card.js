import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	border-radius: 2px;
	margin: auto;
	padding: 0;
	width: 100%;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
`;

export default ({ className, children }) => {
	return <Card className={className}>{children}</Card>;
};
