import styled, { DefaultTheme, ThemeProps } from 'styled-components';

export default styled.h2<ThemeProps<DefaultTheme>>`
	font-size: 48px;
	font-family: ${({ theme }) => theme.typography.headline.font};

	@media (max-width: 640px) {
		font-size: 26px;
	}

	@media (max-width: 1024px) {
		font-size: 30px;
	}

	@media (max-width: 1280px) {
		font-size: 38px;
	}
`;
