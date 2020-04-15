import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { useViewportHeight } from '../hooks';
import Header from './Header';
import Footer from './Footer';
import './layout.css';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const viewportHeight = useViewportHeight();

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
		},
		sizes: {
			extraSmall: '0px',
			small: '600px',
			medium: '960px',
			large: '1280px',
			extraLarge: '1920px',
		},
		section: {
			height: viewportHeight - 60,
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
