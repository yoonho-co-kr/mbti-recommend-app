// src/pages/ResultPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { results } from '../data/results';

function ResultPage() {
  const { type } = useParams();
  const result = results[type];

  if (!result) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg text-center">
        <p className="text-xl font-semibold text-indigo-500 mb-2">당신의 유형은</p>
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">{result.name}</h1>
        <p className="text-gray-700 text-lg mb-6">{result.description}</p>
        
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">추천 직업</h2>
          <p className="text-indigo-700 text-xl">{result.recommendation}</p>
        </div>

        <Link to="/">
          <button className="mt-8 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-150">
            테스트 다시하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
