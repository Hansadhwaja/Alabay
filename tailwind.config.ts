import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				gradientFrom: '#FFF280',
				gradientTo: '#7EFF5E',
				borderCustom: '#0F1B29',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				homepage: "url('../Assets/homepageImage.png')",
				'custom-gradient1': 'linear-gradient(180deg, #DBC70C 0%, rgba(255, 242, 128, 0) 100%)',
				'custom-gradient2': 'linear-gradient(180deg, #00D4D4 0%, rgba(65, 255, 255, 0) 100%)',
				'custom-gradient3': 'linear-gradient(180deg, #D427FF 0%, rgba(212, 39, 255, 0) 100%)',
				'custom-gradient4': 'linear-gradient(179.53deg, #8F3A3C 0.41%, rgba(143, 58, 60, 0) 95.85%)',
			},
			fontFamily: {
				cheeseburga: ['Cheeseburga', 'cursive'],
				montserrat: ['Montserrat', 'sans-serif'],
				kumbhsans: ['Kumbh Sans', 'sans-serif'],
			},
			boxShadow: {
				'custom-shadow': '8px 9px 19px 0px #000000A6',
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('tailwind-scrollbar'),
	],
};
export default config;
