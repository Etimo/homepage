import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { FloatInDir, FloatUp } from '../animations';
import { AnimatedH2, Caption, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';
import { FloatDirection } from '../animations/FloatInDir';

export type CustomerType = {
	name: string;
	url: string;
	image: JSX.Element;
	borders: {
		xs: string;
		sm: string;
	};
	direction: FloatDirection;
};
const generateCustomers = (): CustomerType[] => {
	const data = useStaticQuery(graphql`
		query {
			tele2: file(relativePath: { eq: "customers/modified/tele2.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			blocket: file(relativePath: { eq: "customers/modified/blocket.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			qliro: file(relativePath: { eq: "customers/modified/qliro.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			karma: file(relativePath: { eq: "customers/modified/karma.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			nobina: file(relativePath: { eq: "customers/modified/nobina.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			mittskolval: file(
				relativePath: { eq: "customers/modified/mittskolval.png" }
			) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			seb: file(relativePath: { eq: "customers/modified/seb.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			bovra: file(relativePath: { eq: "customers/modified/bovra.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
		}
	`);
	return [
		{
			name: 'Mitt skolval',
			url: 'https://www.mittskolval.se/',
			image: (
				<GatsbyImage
					image={data.mittskolval.childImageSharp.gatsbyImageData}
					alt="Mitt skolvals logga"
				/>
			),
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Tele2',
			url: 'https://www.tele2.se/',
			image: (
				<GatsbyImage
					image={data.tele2.childImageSharp.gatsbyImageData}
					alt="Tele2:s logga"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'down',
		},
		{
			name: 'Karma',
			url: 'https://karma.life/sv/',
			image: (
				<GatsbyImage
					image={data.karma.childImageSharp.gatsbyImageData}
					alt="Karmas logga"
				/>
			),
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'down',
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: (
				<GatsbyImage
					image={data.nobina.childImageSharp.gatsbyImageData}
					alt="Nobinas logga"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Qliro',
			url: 'https://www.qliro.com/sv-se',
			image: (
				<GatsbyImage
					image={data.qliro.childImageSharp.gatsbyImageData}
					alt="Qliros logga"
				/>
			),
			borders: {
				xs: 'border-r border-b',
				sm: 'lg:border-b-0 ',
			},
			direction: 'right',
		},
		{
			name: 'Blocket',
			url: 'https://www.blocket.se/',
			image: (
				<GatsbyImage
					image={data.blocket.childImageSharp.gatsbyImageData}
					alt="Blockets logga"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: 'lg:border-b-0 lg:border-r',
			},
			direction: 'up',
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: (
				<GatsbyImage
					image={data.seb.childImageSharp.gatsbyImageData}
					alt="SEB:s logga"
				/>
			),
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Bovra',
			url: 'https://bovra.se/',
			image: (
				<GatsbyImage
					image={data.bovra.childImageSharp.gatsbyImageData}
					alt="Bovras logga"
				/>
			),
			borders: {
				xs: '',
				sm: '',
			},
			direction: 'left',
		},
	];
};

type CustomersProps = {
	givenCustomers?: {
		name: string;
		url: string;
		image: JSX.Element;
		borders: {
			xs: string;
			sm: string;
		};
		direction: FloatDirection;
	}[];
	link?: boolean;
	imgDiv?: React.FC;
	backgroundColor?: string;
};

export default ({
	givenCustomers,
	link,
	imgDiv,
	backgroundColor,
	...props
}: CustomersProps) => {
	const customers = givenCustomers ? givenCustomers : generateCustomers();

	return (
		<Section style={{ backgroundColor }}>
			<div className="container mx-auto xl:px-12">
				<div className="flex flex-col mb-8">
					<FloatUp>
						<Caption className="text-center">Våra kunder</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Ett urval av</AnimatedH2>
						<AnimatedH2 direction="right">
							&nbsp;våra <Span> kunder</Span>
						</AnimatedH2>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mx-8 xl:mx-12">
						{customers.map((customer, idx) => {
							const classes = `${customer.borders.xs} ${customer.borders.sm} border-gray-300 py-2 lg:py-4 overflow-hidden`;

							return (
								<div key={idx} className={classes}>
									<FloatInDir
										direction={customer.direction}
										delay={idx * 0.075}
									>
										<div className="mx-auto w-full max-w-xxxxxs md:max-w-xxxxs xl:max-w-xxxs opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-200">
											<a href={customer.url} target="_blank">
												{customer.image}
											</a>
										</div>
									</FloatInDir>
								</div>
							);
						})}
					</div>
					{link && (
						<div className="flex mx-auto mt-6 md:mt-10 lg:mt-12 xl:mt-20">
							<HighlightButton>
								<Link to="/kunder-och-expertis">
									<P>Läs mer om våra kunder och tjänster</P>
								</Link>
							</HighlightButton>
						</div>
					)}
				</div>
			</div>
		</Section>
	);
};
