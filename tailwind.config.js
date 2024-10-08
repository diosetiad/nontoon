const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                poppins: "Poppins, sans-serif",
            },
            colors: {
                alerange: "#FB6908",
                "gray-1": "#B4B4B4",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
            },
            screens: {
                laptop: "1160px",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
