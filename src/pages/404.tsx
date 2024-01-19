import React from 'react';
import { FadeIn } from '../animations';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Caption, Span } from '../elements';
import EmphasizedH2 from '../elements/EmphasizedH2';

const NotFoundPage = () => (
	<Layout>
		<Section style={{ backgroundColor: '#FFFFFF' }}>
			<div className="flex container flex-col md:flex-row px-8 lg:px-32">
				<div className="md:w-1/2">
					<FadeIn direction="left">
						<Caption className="text-center lg:text-left">404</Caption>
						<EmphasizedH2>
							Sidan kunde <Span>inte hittas</Span>
						</EmphasizedH2>
					</FadeIn>
				</div>
			</div>
		</Section>
	</Layout>
);

export default NotFoundPage;
