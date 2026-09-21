import tailwindcss from '@tailwindcss/vite';
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'public',
        emptyOutDir: false,
        watch: {
            include: ['src/scripts/**', 'src/styles/**', 'views/**'],
            exclude: ['public/**'],
        },
        rollupOptions: {
            input: {
                style: resolve(__dirname, 'src/styles/style.css'),
                main: resolve(__dirname, 'src/scripts/main.js'),
                contact: resolve(__dirname, 'src/scripts/contact.js'),
            },
            output: {
                entryFileNames: 'scripts/[name].js',
                assetFileNames: 'styles/[name][extname]',
            },
        },
    },
});
