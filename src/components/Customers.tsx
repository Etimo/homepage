import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import tw from 'twin.macro';
import { FloatInDir, FloatUp } from '../animations';
import { AnimatedH2, Caption, P, Span } from '../elements';
import { HighlightButton } from './Button';
import Section from './Section';

const generateCustomers = () => {
	const data = useStaticQuery(graphql`{
  tele2: file(relativePath: {eq: "customers/modified/tele2.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  blocket: file(relativePath: {eq: "customers/modified/blocket.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  qliro: file(relativePath: {eq: "customers/modified/qliro.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  karma: file(relativePath: {eq: "customers/modified/karma.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  mira: file(relativePath: {eq: "customers/modified/mira.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  nobina: file(relativePath: {eq: "customers/modified/nobina.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  quinyx: file(relativePath: {eq: "customers/modified/quinyx.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  seb: file(relativePath: {eq: "customers/modified/seb.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
}
`);
	return [
		{
			name: 'Blocket',
			url: 'https://www.blocket.se/',
			image: <GatsbyImage image={data.blocket.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Karma',
			url: 'https://karma.life/sv/',
			image: <GatsbyImage image={data.karma.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'down',
		},
		{
			name: 'Tele2',
			url: 'https://www.tele2.se/',
			image: <GatsbyImage image={data.tele2.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'down',
		},
		{
			name: 'Mira',
			url: 'https://www.mira.se/',
			image: <GatsbyImage image={data.mira.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Qliro',
			url: 'https://www.qliro.com/sv-se',
			image: <GatsbyImage image={data.qliro.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: 'lg:border-b-0 ',
			},
			direction: 'right',
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: <GatsbyImage image={data.seb.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-b-0 lg:border-r',
			},
			direction: 'up',
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: <GatsbyImage image={data.quinyx.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: <GatsbyImage image={data.nobina.childImageSharp.gatsbyImageData} />,
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
		direction: string;
	}[];
	link?: boolean;
	imgDiv?: StyledComponent<'div', DefaultTheme, {}, never>;
};

export default ({ givenCustomers, link, imgDiv, ...props }: CustomersProps) => {
	const customers = givenCustomers ? givenCustomers : generateCustomers();

	/* max-width: 150px; */
	const ImageDiv = imgDiv
		? imgDiv
		: styled.div`
				${tw`mx-auto w-full max-w-xxxxxs md:max-w-xxxxs xl:max-w-xxxs opacity-50 hover:opacity-100`};
				${tw`transition-opacity ease-in-out duration-200`};
		  `;

	return (
		<Section style={{ overflow: 'hidden' }}>
			<div className="container mx-auto xl:px-12">
				<div className="flex flex-col mb-8">
					<FloatUp>
						<Caption className="text-center">Våra kunder</Caption>
					</FloatUp>
					<div className="flex flex-row justify-center">
						<AnimatedH2 direction="left">Ett urval av</AnimatedH2>
						<AnimatedH2 direction="right">
							&nbsp;våra <Span secondary> kunder</Span>
						</AnimatedH2>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 mt-8 mx-8 xl:mx-12">
						{customers.map((customer, idx) => {
							const classes = `${customer.borders.xs} ${customer.borders.sm} border-gray-300 py-2 lg:py-4 overflow-hidden`;

							return (
								<div className={classes}>
									<FloatInDir
										direction={customer.direction}
										delay={idx * 0.075}
									>
										<ImageDiv>
											<a href={customer.url} target="_blank">
												{customer.image}
											</a>
										</ImageDiv>
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
