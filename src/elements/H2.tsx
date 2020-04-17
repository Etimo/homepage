import styled, { ThemeProps, DefaultTheme } from 'styled-components';

export default styled.h2<ThemeProps<DefaultTheme>>`
	font-size: 48px;
	font-family: ${({ theme }) => theme.typography.font};

	@media (max-width: 600px) {
		font-size: 26px;
	}

	@media (max-width: 960px) {
		font-size: 30px;
	}

	@media (max-width: 1280px) {
		font-size: 38px;
	}
`;
