// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          MBTI 기반 직업 추천 테스트
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          당신의 성격 유형을 알아보고, 꼭 맞는 직업을 찾아보세요!
        </p>
        <Link to="/question/1">
          <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-150 text-xl">
            테스트 시작하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
