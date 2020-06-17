import styled, { DefaultTheme } from 'styled-components';

type Props = {
	theme?: DefaultTheme;
};

export default styled.div<Props>`
	margin: 0 auto;
	max-width: ${(props) => props.theme.sizes.extraLarge};

	@media print, screen and (min-width: 600px) {
		max-width: ${(props) => props.theme.sizes.small};
	}

	@media print, screen and (min-width: 768px) {
		max-width: ${(props) => props.theme.sizes.medium};
	}

	@media print, screen and (min-width: 1024px) {
		max-width: ${(props) => props.theme.sizes.large};
	}
`;
