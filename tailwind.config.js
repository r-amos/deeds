module.exports = {
    purge: [
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
    ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                merriweather: ["Merriweather", "sans-serif"],
                roboto: ["Roboto Condensed", "sans-serif"],
                arial: ["Arial"],
            },
        },
    },
    variants: {
        extend: {
            ringColor: ["hover"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
