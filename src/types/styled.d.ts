import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		primary: string;
		secondary: string;
		colors: {
			background: string;
		};
		typography: {
			font: string;
		};
		sizes: {
			extraSmall: string;
			small: string;
			medium: string;
			large: string;
			extraLarge: string;
		};
		section: {
			height: number;
		};
		toolbar: {
			height: number;
		};
	}

	export interface ThemeProps<T> {
		theme?: T;
	}
}
