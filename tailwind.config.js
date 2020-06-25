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
				small: '13px',
			},
			spacing: {
				'95': '95%',
				'3/4': '75%',
				'125': '125%',
				'60p': '60px',
			},
			maxWidth: {
				xxs: '15rem',
				xxxs: '11rem',
				xxxxs: '9rem',
				xxxxxs: '6rem',
			},
			maxHeight: {
				'3/4': '75%',
			},
			lineHeight: {
				small: '1.7',
				large: '2.15',
			},
			padding: {
				small: '40px',
				large: '50px',
			},
			gridTemplateColumns: {
				fitting: 'min-content min-content min-content',
			},
		},
	},
	variants: {},
	plugins: [],
};
