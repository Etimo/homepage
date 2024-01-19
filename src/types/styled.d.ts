import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string;
		};
		typography: {
			font: string;
			paragraph: {
				font: string;
			};
			headline: {
				font: string;
			};

			caption: {
				spacing: string;
				size: number;
				font: string;
			};
		};
		sizes: {
			extraSmall: string;
			small: string;
			medium: string;
			large: string;
			extraLarge: string;
		};
		toolbar: {
			height: number;
		};
	}

	export interface ThemeProps<T> {
		theme?: T;
	}
}

declare module 'tailwindcss/resolveConfig' {}
