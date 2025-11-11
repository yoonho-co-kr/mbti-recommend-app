// src/pages/ResultPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { results } from '../data/results';

function ResultPage() {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const result = type ? results[type] : null;

  // Redirect to home if type is invalid or missing
  if (!result) {
    navigate('/');
    return null;
  }

  const handleShareTwitter = () => {
    const text = `제 MBTI는 ${result.name} (${type}) 이고, 추천 직업은 ${result.recommendation} 입니다! #MBTI #직업추천`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

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
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleShareTwitter}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            트위터로 공유하기
          </button>
          <Link
            to="/"
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-3 px-6 rounded-lg transition-colors text-center"
          >
            다시 테스트하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
