/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {
			borderRadius: {
				'4xl': '2rem'
			},
			height: {
				128: '32rem',
				136: '34rem'
			},
			colors: {
				marine: {
					DEFAULT: '#4DC7B8',
					// 50: '#CDEFED',
					// 50: '#E6F7F6',
					50: "#d5f1ef",
					100: '#C1EBE9',
					200: '#AAE4E0',
					300: '#92DDD6',
					400: '#7BD5CD',
					500: '#64CEC3',
					600: '#4DC7B8',
					700: '#3DC2B1',
					800: '#38B2A2',
					900: '#33A392'
				},
				'ocean-green': {
					DEFAULT: '#48B171',
					50: '#98D5A5',
					100: '#8FD19E',
					200: '#7DCA91',
					300: '#6BC285',
					400: '#58BB7A',
					500: '#48B171',
					600: '#409C66',
					700: '#37865B',
					800: '#2E704F',
					900: '#255B42'
				},
				'casal': {
					DEFAULT: '#2C6D66',
					50: '#53B99D',
					100: '#4AB59A',
					200: '#43A38E',
					300: '#3B9182',
					400: '#347F74',
					500: '#2C6D66',
					600: '#235754',
					700: '#1B4140',
					800: '#122B2B',
					900: '#091516'
				},
			}
		}
	},
	plugins: []
};
