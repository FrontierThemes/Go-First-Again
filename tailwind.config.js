const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*.js',
        './templates/**/*.html.twig',
    ],
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
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: colors.white,
            black: colors.black,
            primary: {
                100: "#d0d0d0",
                200: "#a1a1a1",
                300: "#727272",
                400: "#434343",
                500: "#141414",
                600: "#101010",
                700: "#0c0c0c",
                800: "#080808",
                900: "#040404"
            },
            secondary: {
                100: "#eeeeee",
                200: "#dddddd",
                300: "#cbcbcb",
                400: "#bababa",
                500: "#a9a9a9",
                600: "#878787",
                700: "#656565",
                800: "#444444",
                900: "#222222"
            },
            accent: {
                100: "#fdfdfd",
                200: "#fbfbfb",
                300: "#f9f9f9",
                400: "#f7f7f7",
                500: "#f5f5f5",
                600: "#c4c4c4",
                700: "#939393",
                800: "#626262",
                900: "#313131"
            },
            red: {
                100: "#efd4d4",
                200: "#dfa8a8",
                300: "#d07d7d",
                400: "#c05151",
                500: "#b02626",
                600: "#8d1e1e",
                700: "#6a1717",
                800: "#460f0f",
                900: "#230808"
            },
        },
        extend: {
            fontFamily: {
                display: ['"Spectral"', 'serif'],
                heading: ['"PT Sans"', 'sans-serif'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.primary.500'),
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
