import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  server: {
    watch: {
      ignored: '**/db.json',
      usePolling: true,
    },
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
});
