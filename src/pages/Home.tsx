// src/pages/Home.tsx
import React from 'react';

interface HomeProps {
  onStart: () => void;
}

const Home: React.FC<HomeProps> = ({ onStart }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
        내 성격 유형과 추천 분야는?
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        12가지 질문에 답하고 나만의 MBTI 유형을 찾아보세요!
      </p>
      <button
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200 transform hover:scale-105"
        onClick={onStart}
      >
        테스트 시작하기
      </button>
    </div>
  );
};

export default Home;
