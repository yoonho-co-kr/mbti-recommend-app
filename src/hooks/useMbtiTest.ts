// src/hooks/useMbtiTest.ts
import { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { results } from '../data/results';

// MBTI 지표 타입 정의
type MbtiScore = {
  E: number; I: number;
  S: number; N: number;
  T: number; F: number;
  J: number; P: number;
};

const initialScore: MbtiScore = {
  E: 0, I: 0,
  S: 0, N: 0,
  T: 0, F: 0,
  J: 0, P: 0,
};

export const useMbtiTest = () => {
  // 현재 진행 중인 질문의 인덱스
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // 각 지표의 누적 점수
  const [scores, setScores] = useState<MbtiScore>(initialScore);
  // 최종 MBTI 결과 (예: 'ISTJ')
  const [mbtiResult, setMbtiResult] = useState<string | null>(null);

  const totalQuestions = questions.length;
  // 질문이 모두 끝났을 경우 undefined 방지
  const currentQuestion = questions[currentQuestionIndex] || null;
  const isFinished = currentQuestionIndex >= totalQuestions;

  // 1. 답변 처리 함수
  const handleAnswer = useCallback((selectedType: keyof MbtiScore) => {
    // 점수 업데이트
    setScores(prevScores => ({
      ...prevScores,
      [selectedType]: prevScores[selectedType] + 1,
    }));

    // 다음 질문으로 이동
    if (currentQuestionIndex < totalQuestions) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  }, [currentQuestionIndex, totalQuestions]);

  // 2. 최종 MBTI 계산 함수
  const calculateMbti = useCallback(() => {
    // E vs I 비교 (E가 크거나 같으면 E, 아니면 I)
    const EI = scores.E >= scores.I ? 'E' : 'I';
    // S vs N 비교
    const SN = scores.S >= scores.N ? 'S' : 'N';
    // T vs F 비교
    const TF = scores.T >= scores.F ? 'T' : 'F';
    // J vs P 비교
    const JP = scores.J >= scores.P ? 'J' : 'P';

    const finalMbti = `${EI}${SN}${TF}${JP}`;
    setMbtiResult(finalMbti);
  }, [scores]);

  // 3. 테스트 리셋 함수
  const resetTest = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScores(initialScore);
    setMbtiResult(null);
  }, []);

  return {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    isFinished,
    mbtiResult,
    finalResultData: mbtiResult ? results[mbtiResult as keyof typeof results] : null,
    handleAnswer,
    calculateMbti,
    resetTest,
  };
};
