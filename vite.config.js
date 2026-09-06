import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        tailwindcss(),
        pugPlugin({}, { page: { title: 'Mon Site' } })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                style: resolve(__dirname, 'src/style.css'),
                script: resolve(__dirname, 'src/scripts/main.js'),
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'script') {
                        return 'src/scripts/main.js';
                    }
                    return 'assets/[name]-[hash].js';
                },
                assetFileNames: (assetInfo) => {
                    const name = assetInfo.name ?? assetInfo.names?.[0] ?? '';
                    if (name === 'style.css') {
                        return 'src/style.css';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
});
