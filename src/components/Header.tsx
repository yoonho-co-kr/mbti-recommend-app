// src/components/Header.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-4 px-6 mb-8 border-b border-neutral-100 dark:border-neutral-900 bg-white dark:bg-neutral-800">
      <h1 className="text-xl font-bold text-neutral-700 dark:text-neutral-300">
        ✨ MBTI 라이프 추천 가이드
      </h1>
    </header>
  );
};

export default Header;
