import React from 'react';
import Section from './Section';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Caption from '../elements/Caption';

export default () => {
	const data = useStaticQuery(graphql`
		query {
			tele2: file(relativePath: { eq: "customers/tele2.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			blocket: file(relativePath: { eq: "customers/blocket.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			qliro: file(relativePath: { eq: "customers/qliro.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			karma: file(relativePath: { eq: "customers/karma.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mira: file(relativePath: { eq: "customers/mira.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			nobina: file(relativePath: { eq: "customers/nobina.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			quinyx: file(relativePath: { eq: "customers/quinyx.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
			seb: file(relativePath: { eq: "customers/seb.png" }) {
				childImageSharp {
					fluid(maxWidth: 200) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const customers = [
		{
			name: 'Tele2',
			url: 'https://www.tele2.se/',
			image: <Img fluid={data.tele2.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
		},
		{
			name: 'Blocket',
			url: 'https://www.blocket.se/',
			image: <Img fluid={data.blocket.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
		},
		{
			name: 'Qliro',
			url: 'https://www.qliro.com/sv-se',
			image: <Img fluid={data.qliro.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
		},
		{
			name: 'Karma',
			url: 'https://karma.life/sv/',
			image: <Img fluid={data.karma.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
		},
		{
			name: 'Mira',
			url: 'https://www.mira.se/',
			image: <Img fluid={data.mira.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: 'lg:border-b-0 ',
			},
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: <Img fluid={data.nobina.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-b-0 lg:border-r',
			},
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: <Img fluid={data.quinyx.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r',
				sm: '',
			},
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: <Img fluid={data.seb.childImageSharp.fluid} />,
			borders: {
				xs: '',
				sm: '',
			},
		},
	];

	return (
		<Section>
			<div className="container mx-auto xl:px-32">
				<div className="flex flex-col mb-8">
					<Caption className="text-center">Kunder</Caption>
					<h2 className="mx-auto font-sans text-5xl text-center">
						Ett urval av våra <span className="text-cyan">kunder</span>
					</h2>
					<div className="grid grid-cols-2 lg:grid-cols-4 mt-8 md:mx-12">
						{customers.map((customer) => {
							const classes = `${customer.borders.xs} ${customer.borders.sm} border-gray-300 py-auto`;

							return (
								<div
									style={{ filter: 'grayscale(100%) opacity(60%)' }}
									className={classes}
								>
									<div style={{ maxWidth: 150 }} className="mx-auto w-full">
										{customer.image}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Section>
	);
};
