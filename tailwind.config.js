const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: '#42C8AD',
			},
		},
	},
	variants: {},
	plugins: [],
};
