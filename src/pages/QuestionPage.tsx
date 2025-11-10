// src/pages/QuestionPage.tsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = parseInt(id, 10);
  const question = questions.find(q => q.id === questionId);

  const [scores, setScores] = useState(() => {
    const savedScores = sessionStorage.getItem('mbtiScores');
    return savedScores ? JSON.parse(savedScores) : { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  });

  useEffect(() => {
    sessionStorage.setItem('mbtiScores', JSON.stringify(scores));
  }, [scores]);

  const handleAnswer = (type) => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (questionId < questions.length) {
      navigate(`/question/${questionId + 1}`);
    } else {
      // Calculate MBTI type
      let mbtiType = "";
      mbtiType += newScores.E > newScores.I ? "E" : "I";
      mbtiType += newScores.S > newScores.N ? "S" : "N";
      mbtiType += newScores.T > newScores.F ? "T" : "F";
      mbtiType += newScores.J > newScores.P ? "J" : "P";
      navigate(`/result/${mbtiType}`);
    }
  };

  if (!question) {
    return <div>잘못된 접근입니다.</div>;
  }

  const progress = (questionId / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl p-8 bg-white shadow-xl rounded-lg">
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">{questionId} / {questions.length}</p>
        </div>
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
