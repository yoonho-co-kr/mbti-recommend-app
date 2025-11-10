// src/pages/QuestionPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = parseInt(id, 10);
  const question = questions.find(q => q.id === questionId);

  const [scores, setScores] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });

  const handleAnswer = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (questionId < questions.length) {
      navigate(`/question/${questionId + 1}`);
    } else {
      const result = Object.keys(newScores).reduce((a, b) => newScores[a] > newScores[b] ? a : b);
      navigate(`/result/${result}`);
    }
  };

  if (!question) {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg">
        <div className="text-center mb-8">
          <p className="text-2xl font-bold text-indigo-600">Q{question.id}</p>
          <h2 className="text-xl text-gray-800 mt-2">{question.question}</h2>
        </div>
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer.type)}
              className="w-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 font-semibold py-4 rounded-lg transition duration-150"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
