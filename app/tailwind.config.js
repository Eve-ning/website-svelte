/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts,css}'], // darkMode: 'class',
    theme: {
        container: {
            center: true
        },
        extend: {}
    },
    plugins: [require("daisyui")],
};
