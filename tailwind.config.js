/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: { max: '767px' },
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            fontFamily: {
                ploni: ['ploni'],
            },
            maxWidth: {
                850: '850px',
                320: '320px',
            },
            zIndex: {
                '1-': '-1',
            },
            borderRadius: {
                blog: '16rem',
            },
            colors: {
                gray: {
                    400: '#6A6D82',
                    500: '#B9BBC6',
                    700: '2E2F38',
                },
            },
        },
    },
    plugins: [],
};
