import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FadeIn } from '../animations';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Caption, Span } from '../elements';
import H2 from '../elements/H2';

const EmphasizedH2 = styled(H2)`
	line-height: 1.25;
	font-weight: 400;
	margin-bottom: 0;
	${tw`text-center lg:text-left md:mt-4 lg:mt-6 xl:mt-8`}
`;

const NotFoundPage = () => (
	<Layout>
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn direction="left" flex flexDirection="column">
						<Caption className="text-center lg:text-left">
							404
						</Caption>
						<EmphasizedH2>
							Sidan kunde <Span secondary>inte hittas</Span>
						</EmphasizedH2>
					</FadeIn>
				</div>
			</div>
		</Section>
	</Layout>
);

export default NotFoundPage;
