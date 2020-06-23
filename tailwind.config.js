const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				etimo: ['Quattrocento Sans', 'sans-serif'],
				opensans: ['Open Sans', ...defaultTheme.fontFamily.sans],
				mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
				quest: ['Questrial', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: '#42C8AD',
				darkGray: '#888888',
				blackGray: '#111111',
			},
			fontSize: {
				'8xl': '4rem',
			},
			maxWidth: {
				xxs: '15rem',
				xxxs: '11rem',
				xxxxs: '9rem',
				xxxxxs: '6rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
