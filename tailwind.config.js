/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#F4E5B0',
                    dark: '#B8941F',
                },
                cream: {
                    DEFAULT: '#FFF8E7',
                    dark: '#FFF0CC',
                },
                deepRed: {
                    DEFAULT: '#8B0000',
                    light: '#B22222',
                    dark: '#660000',
                },
                forestGreen: {
                    DEFAULT: '#2D5016',
                    light: '#3D6B1F',
                    dark: '#1D3A0F',
                },
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'shimmer': 'shimmer 2s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
            },
        },
    },
    plugins: [],
}
