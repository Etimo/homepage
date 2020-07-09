import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import HeaderLogo from './HeaderLogo';

type HeaderProps = {
	theme: DefaultTheme;
};

type Props = {
	style: React.CSSProperties;
};

const Header = (props: Props) => {
	const HeaderComponent = styled.header`
		width: 100%;
		position: sticky;
		top: 0;
		height: ${(props: HeaderProps) => props.theme.toolbar.height}px;
		background-color: ${(props: HeaderProps) => props.theme.colors.background};
		z-index: 40;
	`;

	const Section = styled.section<HeaderProps>`
		height: 100%;
		max-width: ${(props) => props.theme.sizes.large};
		margin: 0 auto;
		padding: 0 25px;
		display: flex;
		justify-content: space-between;
	`;

	return (
		<HeaderComponent>
			<Section>
				<HeaderLogo />
			</Section>
		</HeaderComponent>
	);
};

export default Header;
