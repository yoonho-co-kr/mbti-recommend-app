// src/App.tsx
import React, { useState, useCallback } from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import { useMbtiTest } from './hooks/useMbtiTest'; // 👈 Hook import

// 앱의 상태 정의: 'home', 'test', 'result' 중 하나
type AppStage = 'home' | 'test' | 'result';

function App() {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isFinished,
    mbtiResult,
    finalResultData,
    handleAnswer,
    calculateMbti,
    resetTest
  } = useMbtiTest(); // 👈 App 컴포넌트에서 Hook 호출

  const [stage, setStage] = useState<AppStage>('home');

  // 테스트 시작 핸들러
  const handleStart = useCallback(() => {
    resetTest(); // 시작 시 상태 초기화
    setStage('test');
  }, [resetTest]);

  // 테스트 완료 핸들러
  const handleFinish = useCallback(() => {
    calculateMbti(); // 결과 계산
    // 상태 업데이트가 비동기적으로 이루어지므로, 다음 렌더링 사이클에서 결과 페이지로 이동
    // setStage('result')를 바로 호출하면 Test 컴포넌트가 언마운트되면서 문제가 발생할 수 있습니다.
    setTimeout(() => {
      setStage('result');
    }, 50); // 짧은 딜레이로 결과 계산 완료를 보장
  }, [calculateMbti]);

  // 테스트 재시작 핸들러
  const handleRestart = useCallback(() => {
    setStage('home');
  }, []);

  // 현재 스테이지에 따라 보여줄 컴포넌트를 결정합니다.
  const renderStage = () => {
    switch (stage) {
      case 'home':
        return <Home onStart={handleStart} />;
      case 'test':
        return (
          // Test 컴포넌트에 필요한 상태와 함수들을 props로 전달
          <Test
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            isFinished={isFinished}
            handleAnswer={handleAnswer}
            onFinish={handleFinish}
          />
        );
      case 'result':
        return (
          // Result 컴포넌트에 결과 데이터를 props로 전달
          <Result
            mbtiResult={mbtiResult}
            finalResultData={finalResultData}
            onRestart={handleRestart}
          />
        );
      default:
        return <Home onStart={handleStart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-2xl">
        {renderStage()}
      </div>
    </div>
  );
}

export default App;
