import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Customers from '../Customers';

const ClientCustomers = () => {
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
  appva: file(relativePath: {eq: "customers/modified/appva.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  comviq: file(relativePath: {eq: "customers/modified/comviq.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  mittskolval: file(relativePath: {eq: "customers/modified/mittskolval.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  expressen: file(relativePath: {eq: "customers/modified/expressen.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  vklass: file(relativePath: {eq: "customers/modified/vklass.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  struqtur: file(relativePath: {eq: "customers/modified/struqtur.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  timewave: file(relativePath: {eq: "customers/modified/timewave.png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 500
        quality: 90
        placeholder: TRACED_SVG
        layout: CONSTRAINED
      )
    }
  }
  bytbil: file(relativePath: {eq: "customers/modified/bytbil.png"}) {
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

	const customers = [
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
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'SEB',
			url: 'https://seb.se/',
			image: <GatsbyImage image={data.seb.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'right',
		},
		{
			name: 'Quinyx',
			url: 'https://www.quinyx.com/sv/',
			image: <GatsbyImage image={data.quinyx.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Nobina',
			url: 'https://www.nobina.com/sv/Sverige/',
			image: <GatsbyImage image={data.nobina.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Appva',
			url: 'https://appva.com/sv/',
			image: <GatsbyImage image={data.appva.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'right',
		},
		{
			name: 'Comviq',
			url: 'https://www.comviq.se/',
			image: <GatsbyImage image={data.comviq.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r',
			},
			direction: 'up',
		},
		{
			name: 'Mitt skolval',
			url: 'https://www.mittskolval.se/',
			image: <GatsbyImage image={data.mittskolval.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r border-b',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Expressen',
			url: 'https://www.expressen.se/',
			image: <GatsbyImage image={data.expressen.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: '',
			},
			direction: 'left',
		},
		{
			name: 'Vklass',
			url: 'https://www.vklass.com/',
			image: <GatsbyImage image={data.vklass.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b border-r',
				sm: 'lg:border-b-0',
			},
			direction: 'right',
		},
		{
			name: 'Struqtur',
			url: 'https://www.struqtur.se/',
			image: <GatsbyImage image={data.struqtur.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-b',
				sm: 'lg:border-r lg:border-b-0',
			},
			direction: 'up',
		},
		{
			name: 'Timewave',
			url: 'https://www.timewave.se/',
			image: <GatsbyImage image={data.timewave.childImageSharp.gatsbyImageData} />,
			borders: {
				xs: 'border-r',
				sm: '',
			},
			direction: 'up',
		},
		{
			name: 'Bytbil',
			url: 'https://www.bytbil.com/',
			image: <GatsbyImage image={data.bytbil.childImageSharp.gatsbyImageData} />,
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
			<Customers imgDiv={ImageDiv} givenCustomers={customers} />
		</>
	);
};

export default ClientCustomers;
