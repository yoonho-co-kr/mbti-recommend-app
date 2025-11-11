// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages URL의 서브 경로를 설정합니다.
const REPO_NAME = 'mbti-recommend-app';

export default defineConfig({
  // 💡 핵심: base 설정을 추가하여 빌드 경로를 서브 경로로 지정
  base: `/${REPO_NAME}/`,
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
});
