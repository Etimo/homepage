import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import '../css/global.css';
import Footer from './Footer';
import Header from './Header';
import './layout.css';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const theme = {
		primary: '#2c3e50',
		secondary: '#42c8ad',
		colors: {
			background: '#f8f8f8',
		},
		typography: {
			paragraph: {
				font: 'Montserrat',
			},
			headline: {
				font: 'Questrial',
			},

			caption: {
				spacing: '0.4em',
				size: 10,
				font: 'Questrial',
			},
		},
		sizes: {
			extraSmall: '0px',
			small: '600px',
			medium: '768px',
			large: '1024px',
			extraLarge: '1920px',
		},
		toolbar: {
			height: 60,
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<>
				<Header style={{ backgroundColor: theme.colors.background }} />
				<main style={{ backgroundColor: theme.colors.background }}>
					{children}
				</main>
				<Footer />
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
