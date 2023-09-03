import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mdPlugin from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    assetsInclude: ['**/*.md'],
    optimizeDeps: {
        exclude: ['.md'], // Ignore .md files
    },
});
