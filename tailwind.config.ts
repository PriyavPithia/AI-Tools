import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#121212',
  			foreground: '#ffffff',
  			card: {
  				DEFAULT: '#1E1E1E',
  				foreground: '#ffffff'
  			},
  			primary: {
  				DEFAULT: '#8B5CF6',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#3F3F46',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: '#27272A',
  				foreground: '#A1A1AA'
  			},
  			accent: {
  				DEFAULT: '#8B5CF6',
  				foreground: '#ffffff'
  			},
  			destructive: {
  				DEFAULT: '#7F1D1D',
  				foreground: '#ffffff'
  			},
  			border: '#2E2E2E',
  			input: '#3F3F46',
  			ring: '#8B5CF6',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
