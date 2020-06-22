import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import './layout.css';
import '../css/global.css';

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
			background: '#f9f9f9',
		},
		typography: {
			font: 'Overpass',
			paragraph: {
				font: 'Open Sans',
			},

			caption: {
				spacing: '3px',
				size: 12,
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
