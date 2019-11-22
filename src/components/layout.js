import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import { useViewportHeight } from '../hooks';
import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
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
			background: '#f9f9f9'
		},
		typography: {
			font: 'Overpass',
			button: {
				small: '24px',
				medium: '28px',
				large: '32px'
			}
		},
		sizes: {
			small: '30rem',
			medium: '45rem',
			large: '60rem'
		},
		section: {
			height: viewportHeight - 10
		},
		toolbar: {
			height: 60
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<>
				<Header
					siteTitle={data.site.siteMetadata.title}
					style={{ backgroundColor: theme.colors.background }}
				/>
				<main style={{ backgroundColor: theme.colors.background }}>
					{children}
				</main>
				<Footer />
			</>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
