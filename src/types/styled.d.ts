import 'styled-components';

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
			small: string;
			medium: string;
			large: string;
		};
		section: {
			height: number;
		};
		toolbar: {
			height: number;
		};
	}
}
