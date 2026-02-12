export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {}, // autoprefixer is usually included but good to be explicit or remove if v4 handles it.
        // actually for v4, @tailwindcss/postcss handles everything.
    },
}
