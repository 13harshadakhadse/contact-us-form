/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                apprevio: {
                    primary: '#3584BC',
                    light: '#74B3D7',
                    dark: '#2E6FA1',
                }
            }
        }
    },
    plugins: [],
}