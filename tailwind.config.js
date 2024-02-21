/** @type {import('tailwindcss').Config} */
export default {
    
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "main-purple" : "#9b22ff",
                "main-black" : "#171717"
            },

            fontFamily: {
                "jost" : "Jost",
                "dancing-script" : "Dancing Script",
                "anton" : "Anton"
            }
        },
    },
    plugins: [],
}

