import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				coffeeVariant1: "rgb(255,159,71)",
				coffeeVariant2: "rgb(47,32,5)",
				coffeeVariant3: "rgb(32,23,5)",
			},
			backgroundImage: {
				"coffee-bg": "url(/coffee-home.png)",
			},
		},
		screens: {
			"xs": "320px",   // Pequenos dispositivos móveis
			"sm": "360px",   // Muitos smartphones Android modernos
			"md": "375px",   // iPhone 6/7/8 e similares
			"lg": "414px",   // iPhone 6/7/8 Plus e iPhone X/11/12/13 Pro Max
			"xl": "768px",   // iPad e tablets de 7-8 polegadas
			"2xl": "810px",  // Tablets de 9-10 polegadas
			"3xl": "1024px", // Laptops pequenos e dispositivos híbridos
			"4xl": "1280px", // Laptops de 13 polegadas e monitores pequenos
			"5xl": "1366px", // Laptops de 14-15 polegadas
			"6xl": "1440px", // Monitores de 16 polegadas ou mais
			"7xl": "1600px", // Monitores de 20 polegadas
			"8xl": "1920px", // Resolução Full HD (1080p)
			"9xl": "2560px", // Resolução QHD
			"10xl": "3840px",// Resolução 4K
		}
	},
	plugins: [],
};
export default config;
