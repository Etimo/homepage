import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Customers from '../Customers';

const ClientCustomers = () => {
	const data = useStaticQuery(graphql`
		query {
			tele2: file(relativePath: { eq: "customers/modified/tele2.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			blocket: file(relativePath: { eq: "customers/modified/blocket.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			qliro: file(relativePath: { eq: "customers/modified/qliro.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			karma: file(relativePath: { eq: "customers/modified/karma.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			mira: file(relativePath: { eq: "customers/modified/mira.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			nobina: file(relativePath: { eq: "customers/modified/nobina.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			quinyx: file(relativePath: { eq: "customers/modified/quinyx.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			seb: file(relativePath: { eq: "customers/modified/seb.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			megger: file(relativePath: { eq: "customers/modified/megger.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			comviq: file(relativePath: { eq: "customers/modified/comviq.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			appva: file(relativePath: { eq: "customers/modified/appva.png" }) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
			expressen: file(
				relativePath: { eq: "customers/modified/expressen.png" }
			) {
				childImageSharp {
					fluid(maxWidth: 500, quality: 90) {
						...GatsbyImageSharpFluid_tracedSVG
					}
				}
			}
		}
	`);

	const customers = [
		{
			name: 'Blocket',
			url: 'https://www.blocket.se/',
			image: <Img fluid={data.blocket.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Karma',
			url: 'https://karma.life/sv/',
			image: <Img fluid={data.karma.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'down',
		},
		{
			name: 'Tele2',
			url: 'https://www.tele2.se/',
			image: <Img fluid={data.tele2.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'down',
		},
		{
			name: 'Mira',
			url: 'https://www.mira.se/',
			image: <Img fluid={data.mira.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Qliro',
			url: 'https://www.qliro.com/sv-se',
			image: <Img fluid={data.qliro.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: <Img fluid={data.seb.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'right',
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: <Img fluid={data.quinyx.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: <Img fluid={data.nobina.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Megger',
			url: 'https://se.megger.com/',
			image: <Img fluid={data.megger.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r border-b',
				sm: 'lg:border-b-0',
			},
			direction: 'right',
		},
		{
			name: 'Comviq',
			url: 'https://www.comviq.se/',
			image: <Img fluid={data.comviq.childImageSharp.fluid} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-b-0 lg:border-r',
			},
			direction: 'up',
		},
		{
			name: 'Appva',
			url: 'https://appva.com/sv/',
			image: <Img fluid={data.appva.childImageSharp.fluid} />,
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Expressen',
			url: 'https://www.expressen.se/',
			image: <Img fluid={data.expressen.childImageSharp.fluid} />,
			borders: {
				xs: '',
				sm: '',
			},
			direction: 'left',
		},
	];

	return (
		<>
			<Customers givenCustomers={customers} />
		</>
	);
};

export default ClientCustomers;
