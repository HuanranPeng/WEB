import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/2026/',
  plugins: [
    {
      name: 'redirect-base-without-trailing-slash',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/2026' || req.url?.startsWith('/2026?')) {
            const query = req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
            res.statusCode = 302;
            res.setHeader('Location', `/2026/${query}`);
            res.end();
            return;
          }
          next();
        });
      },
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: ['.localhost.run', '.lhr.life'], // wildcard-safe
  },
});
