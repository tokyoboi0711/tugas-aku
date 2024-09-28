/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*{.html,.js}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
        sserif: ["Source Serif 4", "serif"],
			},
		},
	},
	plugins: [],
};

