// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // React 18+에서 가장 권장되는 설정 (자동 임포트)
      jsxRuntime: 'automatic',
    }),
  ],
});
