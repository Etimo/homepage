import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	height: ${props => (props.height ? props.height + 'px' : 'inherit')};
	justify-content: center;

	@media print, screen and (max-width: 45rem) {
		height: inherit;
	}
`;

export default props => <Container {...props} />;
