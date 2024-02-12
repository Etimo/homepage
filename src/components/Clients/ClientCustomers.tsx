import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Customers from '../Customers';
import { CustomerType } from '../Customers';

type ClientCustomersProps = {
	sectionHeight: number;
};

const ClientCustomers = (props: ClientCustomersProps) => {
	const { sectionHeight } = props;
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
			mira: file(relativePath: { eq: "customers/modified/mira.png" }) {
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
			quinyx: file(relativePath: { eq: "customers/modified/quinyx.png" }) {
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
			appva: file(relativePath: { eq: "customers/modified/appva.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			comviq: file(relativePath: { eq: "customers/modified/comviq.png" }) {
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
			expressen: file(
				relativePath: { eq: "customers/modified/expressen.png" }
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
			vklass: file(relativePath: { eq: "customers/modified/vklass.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			struqtur: file(relativePath: { eq: "customers/modified/struqtur.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			timewave: file(relativePath: { eq: "customers/modified/timewave.png" }) {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 500
						quality: 90
						placeholder: NONE
					)
				}
			}
			bytbil: file(relativePath: { eq: "customers/modified/bytbil.png" }) {
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

	const customers: CustomerType[] = [
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
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
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
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'down',
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
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'down',
		},
		{
			name: 'Mira',
			url: 'https://www.mira.se/',
			image: (
				<GatsbyImage
					image={data.mira.childImageSharp.gatsbyImageData}
					alt="Miras logga"
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
				sm: '',
			},
			direction: 'right',
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
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'right',
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: (
				<GatsbyImage
					image={data.quinyx.childImageSharp.gatsbyImageData}
					alt="Quinix logga"
				/>
			),
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'left',
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
			name: 'Appva',
			url: 'https://appva.com/sv/',
			image: (
				<GatsbyImage
					image={data.appva.childImageSharp.gatsbyImageData}
					alt="Appvas logga"
				/>
			),
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Comviq',
			url: 'https://www.comviq.se/',
			image: (
				<GatsbyImage
					image={data.comviq.childImageSharp.gatsbyImageData}
					alt="Comviqs logga"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'up',
		},
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
			direction: 'up',
		},
		{
			name: 'Expressen',
			url: 'https://www.expressen.se/',
			image: (
				<GatsbyImage
					image={data.expressen.childImageSharp.gatsbyImageData}
					alt="Expressens logga"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Vklass',
			url: 'https://www.vklass.com/',
			image: (
				<GatsbyImage
					image={data.vklass.childImageSharp.gatsbyImageData}
					alt="Vklass"
				/>
			),
			borders: {
				xs: 'border-b border-r',
				sm: 'lg:border-b-0',
			},
			direction: 'right',
		},
		{
			name: 'Struqtur',
			url: 'https://www.struqtur.se/',
			image: (
				<GatsbyImage
					image={data.struqtur.childImageSharp.gatsbyImageData}
					alt="Struqtur"
				/>
			),
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r lg:border-b-0',
			},
			direction: 'up',
		},
		{
			name: 'Timewave',
			url: 'https://www.timewave.se/',
			image: (
				<GatsbyImage
					image={data.timewave.childImageSharp.gatsbyImageData}
					alt="Timewaves logga"
				/>
			),
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Bytbil',
			url: 'https://www.bytbil.com/',
			image: (
				<GatsbyImage
					image={data.bytbil.childImageSharp.gatsbyImageData}
					alt="Bytbils logga"
				/>
			),
			borders: {
				xs: '',
				sm: '',
			},
			direction: 'left',
		},
	];

	/* Send this to replace ImageDiv in Customers */
	const ImageDiv = styled.div`
		${tw`mx-auto w-full max-w-xxxxxs md:max-w-xxxxs lg:max-w-xxxxxs xl:max-w-xxxxs opacity-50 hover:opacity-100`};
		${tw`transition-opacity ease-in-out duration-200`};
	`;

	return (
		<>
			<Customers
				sectionHeight={sectionHeight}
				imgDiv={ImageDiv}
				givenCustomers={customers}
				backgroundColor="white"
			/>
		</>
	);
};

export default ClientCustomers;
