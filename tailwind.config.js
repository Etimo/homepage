const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				etimo: ['Quattrocento Sans', 'sans-serif'],
				opensans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: '#42C8AD',
				darkGray: '#888888',
			},
			fontSize: {
				'8xl': '4rem',
			},
			maxWidth: {
				xxs: '15rem',
				xxxs: '12rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
