import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import '../css/global.css';
import { sizes } from '../helpers';
import Footer from './Footer';
import Header from './Header';
import './layout.css';
import RightMenu from './RightMenu';
import { ScrollToTopButton } from '../components/Button';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const theme: DefaultTheme = {
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
			font: 'Montserrat',
		},
		sizes: {
			extraSmall: '0px',
			small: '600px',
			medium: '768px',
			large: '1024px',
			extraLarge: '1920px',
		},
		toolbar: {
			height: sizes().headerHeight,
		},
	};

	return (
		<ThemeProvider theme={theme}>
			<>
				<Header style={{ backgroundColor: theme.colors.background }} />
				<main style={{ backgroundColor: theme.colors.background }}>
					<RightMenu />
					<ScrollToTopButton showBelow={300} />
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
