import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import tw from 'twin.macro';

export default styled.div<ThemeProps<DefaultTheme>>`
	font-family: ${({ theme }) => theme.typography.caption.font};
	letter-spacing: ${({ theme }) => theme.typography.caption.spacing};
	font-size: ${({ theme }) => theme.typography.caption.size}px;
	line-height: 2;
	text-transform: uppercase;
	font-weight: 400;
	}};

	${tw`mb-1 md:mb-3 lg:mb-4 overflow-hidden`}
`;
