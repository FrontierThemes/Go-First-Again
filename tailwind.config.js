module.exports = {
    mode: 'jit',
    purge: [
        './src/**/*.js',
        './templates/**/*.html.twig',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
