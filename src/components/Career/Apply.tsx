import React from 'react';
import { FloatUp } from '../../animations';
import { Caption, H2, P, Span } from '../../elements';
import Section from '../Section';

type Variant = {
	caption: String;
	header: String;
	text: String;
	emailText: String;
	email: String;
};
const variants: { [key: string]: Variant } = {
	default: {
		caption: 'Bli en i gänget',
		header: 'Ansök här',
		text: 'Vill du jobba hos oss?',
		emailText: 'Skicka ett mail till oss på',
		email: 'kontakt@etimo.se',
	},
	customers: {
		caption: 'Bättre mjukvara för en bättre värld',
		header: 'Kontakta oss',
		text: 'Behöver du teknikkompetens i världsklass?',
		emailText: 'Skicka ett mail till Jeanette på',
		email: 'jeanette.britan@etimo.se',
	},
};

type Props = {
	variantKey: string;
	backgroundColor?: string;
};

const Apply = (props: Props) => {
	const { variantKey, backgroundColor } = props;
	const variant = variants[variantKey];
	return (
		<Section style={{ backgroundColor }}>
			<div className="flex container flex-col px-8 lg:px-32 text-center overflow-hidden">
				<FloatUp>
					<Caption>{variant.caption}</Caption>
					<H2>{variant.header}</H2>
					<P>{variant.text}</P>
					<P>
						{variant.emailText}{' '}
						<Span>
							<a href={`mailto:${variant.email}`} target="_blank">
								{variant.email}
							</a>
						</Span>
					</P>
				</FloatUp>
			</div>
		</Section>
	);
};

export default Apply;
