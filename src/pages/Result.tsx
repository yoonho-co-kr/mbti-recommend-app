// src/pages/Result.tsx
import React from 'react';

// Result 컴포넌트가 받을 Props 타입 정의
interface ResultProps {
  mbtiResult: string | null;
  finalResultData: any; // 결과 데이터 객체
  onRestart: () => void;
}

const Result: React.FC<ResultProps> = ({ mbtiResult, finalResultData, onRestart }) => {

  // 결과 데이터가 없으면 홈으로 돌아가도록 유도
  if (!mbtiResult || !finalResultData) {
    return (
      <div className="text-center">
        <p className="text-red-500 mb-4">테스트 결과가 없습니다. 다시 시작해주세요.</p>
        <button className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg" onClick={onRestart}>
          다시 시작
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">당신의 MBTI 유형은...</h2>

      {/* 최종 MBTI 유형 표시 */}
      <div className="inline-block bg-indigo-100 text-indigo-800 text-6xl font-extrabold py-4 px-8 rounded-xl mb-6 shadow-lg">
        {mbtiResult}
      </div>

      {/* 유형 이름 및 설명 */}
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{finalResultData.name}</h3>
      <p className="text-lg text-gray-600 mb-6 border-b pb-4">
        {finalResultData.description}
      </p>

      {/* 추천 분야 */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <h4 className="text-xl font-semibold text-yellow-800 mb-2">💡 추천 분야</h4>
        <p className="text-gray-700">{finalResultData.recommendation}</p>
      </div>

      {/* 다시 시작 버튼 */}
      <button
        className="w-full mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
        onClick={onRestart}
      >
        테스트 다시 하기
      </button>
    </div>
  );
};

export default Result;
