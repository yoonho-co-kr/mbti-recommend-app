// src/pages/QuestionPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { calculateMbtiType, shuffleArray } from '../utils/mbtiUtils';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentQuestionIndex = parseInt(id || '1', 10) - 1; // 0-indexed

  const [shuffledQuestionIds] = useState<number[]>(() => {
    const savedShuffledIds = localStorage.getItem('shuffledQuestionIds');
    if (savedShuffledIds) {
      return JSON.parse(savedShuffledIds);
    }
    const initialShuffledIds = shuffleArray(questions.map(q => q.id));
    localStorage.setItem('shuffledQuestionIds', JSON.stringify(initialShuffledIds));
    return initialShuffledIds;
  });

  const currentQuestionId = shuffledQuestionIds[currentQuestionIndex];
  const question = questions.find(q => q.id === currentQuestionId);

  const [scores, setScores] = useState(() => {
    const savedScores = localStorage.getItem('mbtiScores');
    return savedScores ? JSON.parse(savedScores) : { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  });

  const [userAnswers, setUserAnswers] = useState(() => {
    const savedAnswers = localStorage.getItem('userAnswers');
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  });

  useEffect(() => {
    localStorage.setItem('mbtiScores', JSON.stringify(scores));
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));
  }, [scores, userAnswers]);

  const handleAnswer = (type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P') => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);
    setUserAnswers((prev: { [key: number]: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' }) => ({ ...prev, [currentQuestionId]: type }));

    if (currentQuestionIndex < questions.length - 1) {
      navigate(`/question/${currentQuestionIndex + 2}`);
    } else {
      const mbtiType = calculateMbtiType(newScores);
      localStorage.setItem('finalScores', JSON.stringify(newScores));
      localStorage.setItem('finalUserAnswers', JSON.stringify(userAnswers));
      navigate(`/result/${mbtiType}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const previousQuestionIndex = currentQuestionIndex - 1;
      const previousQuestionActualId = shuffledQuestionIds[previousQuestionIndex];
      const previousAnswerType = userAnswers[previousQuestionActualId];

      if (previousAnswerType) {
        const newScores = { ...scores, [previousAnswerType]: scores[previousAnswerType] - 1 };
        setScores(newScores);
      }

      const newAnswers = { ...userAnswers };
      delete newAnswers[currentQuestionId]; // Remove current question's answer
      setUserAnswers(newAnswers);

      navigate(`/question/${currentQuestionIndex}`);
    }
  };

  if (!question) {
    return <div className="text-neutral-900 dark:text-neutral-100">잘못된 접근입니다.</div>;
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <div className="mb-4">
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2.5">
              <div
                className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-2">{currentQuestionIndex + 1} / {questions.length}</p>
          </div>
          <CardTitle className="text-center mb-8">
            <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">Q{currentQuestionIndex + 1}</p>
            <h2 className="text-xl text-neutral-800 dark:text-neutral-200 mt-2">{question.question}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(answer.type)}
                className="w-full"
                variant="outline"
              >
                {answer.text}
              </Button>
            ))}
          </div>
        </CardContent>
        {currentQuestionIndex > 0 && (
          <CardFooter>
            <Button
              onClick={handlePrevious}
              className="w-full mt-4"
              variant="neutral"
            >
              이전 질문
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default QuestionPage;

