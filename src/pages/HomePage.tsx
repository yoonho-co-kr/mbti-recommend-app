// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '../components/ui/button';

function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl p-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            MBTI 기반 직업 추천 테스트
          </CardTitle>
          <CardDescription className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            당신의 성격 유형을 알아보고, 꼭 맞는 직업을 찾아보세요!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/question/1" className="block">
            <Button
              className="w-full h-12 text-xl"
              variant="outline"
              onClick={() => {
                const confirmRestart = window.confirm("테스트를 다시 시작하시겠습니까? 기존 진행 상황은 초기화됩니다.");
                if (confirmRestart) {
                  localStorage.removeItem('mbtiScores');
                  localStorage.removeItem('userAnswers');
                  localStorage.removeItem('finalScores');
                  localStorage.removeItem('finalUserAnswers');
                }
              }}
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
