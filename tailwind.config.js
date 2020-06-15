const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
				etimo: ['Quattrocento Sans', 'sans-serif']
			},
			colors: {
				cyan: '#42C8AD',
			},
			fontSize: {
				'8xl': '4rem',
			}
		}
	},
	variants: {},
	plugins: [],
};
