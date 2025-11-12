// src/pages/QuestionPage.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { calculateMbtiType, shuffleArray } from '../utils/mbtiUtils';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader } from '@/components/ui/card'; // Import shadcn/ui Card components // Import shadcn/ui Button
// import { Question } from '../data/questions'; // Question interface is not directly used here

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentQuestionIndex = parseInt(id || '1', 10) - 1; // 0-indexed

  const [shuffledQuestionIds] = useState<number[]>(() => { // setShuffledQuestionIds is not used after initial setup
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
    return <div>잘못된 접근입니다.</div>;
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl p-8"> {/* Use shadcn/ui Card */}
        <CardHeader>
          <div className="mb-4">
            <Progress value={progress} className="w-full" />
            <p className="text-center text-sm text-gray-600 mt-2">{currentQuestionIndex + 1} / {questions.length}</p>
          </div>
          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-indigo-600">Q{currentQuestionIndex + 1}</p>
            <h2 className="text-xl text-gray-800 mt-2">{question.question}</h2>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <Button
                key={index}
                onClick={() => handleAnswer(answer.type)}
                className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-4 rounded-lg transition duration-150"
              >
                {answer.text}
              </Button>
            ))}
            {currentQuestionIndex > 0 && (
              <Button
                onClick={handlePrevious}
                className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 rounded-lg transition duration-150 mt-4"
              >
                이전 질문
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuestionPage;
