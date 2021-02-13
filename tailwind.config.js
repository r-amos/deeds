const colors = require("tailwindcss/colors");

module.exports = {
    // purge: [
    //     "./storage/framework/views/*.php",
    //     "./resources/views/**/*.blade.php",
    //     options: {
    //         whitelist: ['tip', 'warning', 'expert'],
    //         whitelistPatternsChildren: [/content.$/]
    //      }
    // ],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        colors,
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
