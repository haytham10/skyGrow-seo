module.exports = {
	content: [
	  './app/**/*.{js,jsx,ts,tsx}',
	  './components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
		  colors: {
			navy: {
			  800: '#1a2a4a',       // Darker navy for deeper sections
			  900: '#0f172a',       // Very dark navy for background
			},
			off: {
			  white: '#f8f9fa',     // Off-white for softer backgrounds
			},
			gold: {
			  500: '#ffcc00',       // Bright gold for highlights or CTAs
			},
		  },
		},
	  },
	variants: {},
	plugins: [],
  };
