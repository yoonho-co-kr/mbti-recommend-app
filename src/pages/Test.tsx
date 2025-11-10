// src/pages/Test.tsx
import React from 'react';

// 답변 버튼 컴포넌트
const AnswerButton: React.FC<{ text: string; type: string; onClick: () => void }> = ({ text, onClick }) => (
  <button
    className="w-full bg-white border border-gray-300 hover:bg-indigo-50 text-gray-800 py-3 px-4 rounded-lg shadow-sm transition duration-150 text-left mb-4"
    onClick={onClick}
  >
    {text}
  </button>
);

// Test 컴포넌트가 받을 Props 타입 정의
interface TestProps {
  currentQuestion: any; // 질문 데이터
  currentQuestionIndex: number;
  totalQuestions: number;
  isFinished: boolean;
  handleAnswer: (type: string) => void;
  onFinish: () => void;
}

const Test: React.FC<TestProps> = ({
                                     currentQuestion,
                                     currentQuestionIndex,
                                     totalQuestions,
                                     isFinished,
                                     handleAnswer,
                                     onFinish
                                   }) => {

  // 테스트가 완료되면 부모 컴포넌트의 onFinish 함수를 호출합니다.
  if (isFinished) {
    onFinish(); // App.tsx의 handleFinish 호출 -> calculateMbti 실행
    return null;
  }

  // 질문 데이터가 없을 경우 (혹시 모를 에러 방지)
  if (!currentQuestion) {
    return <div>질문 데이터를 불러오는 중...</div>;
  }

  const progress = Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div>
      {/* 진행 상태 바 */}
      <div className="mb-8">
        <div className="text-sm font-medium text-indigo-600 mb-2">
          {currentQuestionIndex + 1} / {totalQuestions}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* 질문 내용 */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Q{currentQuestion.id}. {currentQuestion.question}
      </h2>

      {/* 답변 선택지 */}
      <div className="space-y-4">
        {currentQuestion.answers.map((answer: any, index: number) => ( // TypeScript 타입 맞추기 위해 any 사용
          <AnswerButton
            key={index}
            text={answer.text}
            type={answer.type}
            // 답변 선택 시 handleAnswer 호출
            onClick={() => handleAnswer(answer.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default Test;
