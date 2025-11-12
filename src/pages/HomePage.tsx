// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Import shadcn/ui Card components

function HomePage() {
  const handleStartTest = () => {
    const confirmRestart = window.confirm("테스트를 다시 시작하시겠습니까? 기존 진행 상황은 초기화됩니다.");
    if (confirmRestart) {
      localStorage.removeItem('mbtiScores');
      localStorage.removeItem('userAnswers');
      localStorage.removeItem('finalScores'); // Also clear final scores
      localStorage.removeItem('finalUserAnswers'); // Also clear final user answers
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl p-8 text-center"> {/* Use shadcn/ui Card */}
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-indigo-600 mb-4">
            MBTI 기반 직업 추천 테스트
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-8">
            당신의 성격 유형을 알아보고, 꼭 맞는 직업을 찾아보세요!
          </p>
          <Link to="/question/1">
            <Button
              onClick={handleStartTest}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition duration-150 text-xl"
            >
              테스트 시작하기
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
