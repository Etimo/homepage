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
			small: '30rem',
			medium: '45rem',
			large: '60rem',
		},
		section: {
			height: viewportHeight - 60 - 10,
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
