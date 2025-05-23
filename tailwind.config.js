const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./src/pages/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			fontFamily: {
				etimo: ['Quattrocento Sans', 'sans-serif'],
				mont: ['Montserrat', 'sans-serif', ...defaultTheme.fontFamily.sans],
				quest: ['Questrial', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cyan: '#42C8AD',
				etimoBlue: '#2c3e50',
				darkGray: '#888888',
				blackGray: '#111111',
				menuGray: '#231f20',
			},
			fontSize: {
				'8xl': '5rem',
				'10xl': '6rem',
				small: '13px',
			},
			spacing: {
				95: '95%',
				'3/4': '75%',
				125: '125%',
				'15p': '15px',
				'60p': '60px',
				'50p': '50px',
				'30p': '30px',
				'270p': '270px',
				'350p': '350px',
				'25r': '25rem',
				'450p': '450px',
				'740p': '740px',
				7: '1.75rem',
			},
			maxWidth: {
				xxs: '15rem',
				xxxs: '11rem',
				xxxxs: '9rem',
				'8rem': '8rem',
				xxxxxs: '6rem',
			},
			inset: {
				'62px': '62px',
				'47px': '47px',
				'40px': '40px',
				'23px': '23px',
				'20px': '20px',
				'15px': '15px',
			},
			maxHeight: {
				'3/4': '75%',
			},
			minHeight: {
				cyanHover: '36px',
				16: '4rem',
			},
			height: {
				heroFloatIn: '200px',
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
			gridTemplateColumns: {
				custom: 'repeat(3, minmax(0, 260px))',
			},
			gridTemplateRows: {
				8: 'repeat(8, minmax(0, 1fr))',
				10: 'repeat(10, minmax(0, 1fr))',
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
		},
	},
	variants: {},
	plugins: [],
};
