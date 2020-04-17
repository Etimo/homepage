import React from 'react';
import Section from './Section';
import Container from '../elements/Container';
import Row from '../elements/Row';
import Col from '../elements/Col';
import Caption from '../elements/Caption';
import styled from 'styled-components';
import H2 from '../elements/H2';
import Span from '../elements/Span';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
`;

const ThePeople = () => {
	return (
		<Section>
			<Container>
				<Row justifyContent="center" flexDirection="column">
					<Col>
						<Caption>Människorna</Caption>
						<EmphasizedH2>
							Några av <Span secondary>oss</Span>
						</EmphasizedH2>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
