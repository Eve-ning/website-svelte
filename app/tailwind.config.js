/** @type {import('tailwindcss').Config} */
export default {

    content: ['./src/**/*.{html,js,svelte,ts}'], // darkMode: 'class',
    theme: {
        container: {
            center: true
        }, extend: {}
    },
    daisyui: {
        themes: [{
            golda: {
                "primary": "#8b2c9d",
                "secondary": "#2e1a34",
                "accent": "#31ffd9",
                "neutral": "#414857",
                "base-100": "#1f2937",
                "info": "#00dcff",
                "success": "#bef264",
                "warning": "#facc15",
                "error": "#f44f63",
            },
        },],
    }, plugins: [require('@tailwindcss/typography'), require("daisyui")],
};
