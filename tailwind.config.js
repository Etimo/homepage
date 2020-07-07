const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				etimo: ['Quattrocento Sans', 'sans-serif'],
				mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
				quest: ['Questrial', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: '#42C8AD',
				etimoBlue: '#2c3e50',
				darkGray: '#888888',
				blackGray: '#111111',
			},
			fontSize: {
				'8xl': '5rem',
				'10xl': '6rem',
				small: '13px',
			},
			spacing: {
				'95': '95%',
				'3/4': '75%',
				'125': '125%',
				'60p': '60px',
				'100': '25rem',
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
