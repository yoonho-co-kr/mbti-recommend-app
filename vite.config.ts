// vite.config.js

import { defineConfig } from 'vite';

const REPO_NAME = 'mbti-recommend-app';
export default defineConfig({
  base: `/${REPO_NAME}/`, // 이 설정이 정확해야 합니다.
  // ...
});
