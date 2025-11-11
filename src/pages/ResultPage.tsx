// src/pages/ResultPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { results } from '../data/results';

function ResultPage() {
  const { type } = useParams();
  const result = results[type];

  const handleShareTwitter = () => {
    const text = `제 MBTI는 ${result.name} (${type}) 이고, 추천 직업은 ${result.recommendation} 입니다! #MBTI #직업추천`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  if (!result) {
    return <div>결과를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg text-center">
        <p className="text-xl font-semibold text-indigo-500 mb-2">당신의 유형은</p>
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4">{type}</h2>
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">{result.name}</h1>
        <p className="text-gray-700 text-lg mb-6">{result.description}</p>
        
        <div className="bg-indigo-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-indigo-800 mb-3">추천 직업</h2>
          <p className="text-indigo-700 text-xl">{result.recommendation}</p>
        </div>

        {result.characteristics && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-3">주요 특징</h3>
            <ul className="list-disc list-inside text-gray-700">
              {result.characteristics.map((char, index) => (
                <li key={index}>{char}</li>
              ))}
            </ul>
          </div>
        )}

        {result.famous_figures && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-3">유명 인물</h3>
            <ul className="list-disc list-inside text-gray-700">
              {result.famous_figures.map((figure, index) => (
                <li key={index}>{figure}</li>
              ))}
            </ul>
          </div>
        )}

        {result.best_environments && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-3">이상적인 환경</h3>
            <ul className="list-disc list-inside text-gray-700">
              {result.best_environments.map((env, index) => (
                <li key={index}>{env}</li>
              ))}
            </ul>
          </div>
        )}

        {result.growth_tips && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-3">성장 팁</h3>
            <ul className="list-disc list-inside text-gray-700">
              {result.growth_tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={handleShareTwitter}
          className="mt-8 w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition duration-150"
        >
          Twitter에 결과 공유하기
        </button>

        <Link to="/">
          <button className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-150">
            테스트 다시하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
