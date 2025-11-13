// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '../components/ui/button';

function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl p-8 text-center">
        <CardHeader>
          <CardTitle className="text-4xl break-keep font-bold text-primary-600 dark:text-primary-400 mb-4">
            MBTI-based Career Recommendation Test
          </CardTitle>
          <CardDescription className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Discover your personality type and find the perfect career match!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link to="/question/1" className="block">
            <Button
              className="w-full h-12 text-xl"
              variant="outline"
              onClick={() => {
                const confirmRestart = window.confirm("Are you sure you want to restart the test? Your current progress will be reset.");
                if (confirmRestart) {
                  localStorage.removeItem('mbtiScores');
                  localStorage.removeItem('userAnswers');
                  localStorage.removeItem('finalScores');
                  localStorage.removeItem('finalUserAnswers');
                }
              }}
            >
              Start Test
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomePage;
