// src/pages/ResultPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { results } from '../data/results';
import { mbtiStatistics } from '../data/mbtiStatistics'; // Import statistics
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Kakao: any; // Kakao SDK is a global object, typing it fully is beyond the scope of this task.

function ResultPage() {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const result = type ? results[type] : null;

  // Retrieve scores for explanation
  const finalScoresString = localStorage.getItem('finalScores'); // Changed to localStorage
  const finalScores = finalScoresString ? JSON.parse(finalScoresString) : null;

  // Redirect to home if type is invalid or missing
  if (!result) {
    navigate('/');
    return null;
  }

  const generateExplanation = (mbtiType: string, scores: { [key: string]: number }) => {
    if (!scores) return "Could not find MBTI type analysis information.";

    const explanationParts: string[] = [];
    type TraitPair = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    type TraitDescription = Record<TraitPair, string>;
    
    const traits: Array<{
      pair: [TraitPair, TraitPair];
      name: string;
      desc: TraitDescription;
    }> = [
      { pair: ['E', 'I'], name: '에너지의 방향', desc: { E: '외향형', I: '내향형', S: '', N: '', T: '', F: '', J: '', P: '' } },
      { pair: ['S', 'N'], name: '정보 인식', desc: { S: '감각형', N: '직관형', E: '', I: '', T: '', F: '', J: '', P: '' } },
      { pair: ['T', 'F'], name: '판단 기준', desc: { T: '사고형', F: '감정형', E: '', I: '', S: '', N: '', J: '', P: '' } },
    ];

    traits.forEach(trait => {
      const [first, second] = trait.pair;
      if (scores[first] > scores[second]) {
        explanationParts.push(`In ${trait.name}, ${trait.desc[first]} (${scores[first]} points) is higher than ${trait.desc[second]} (${scores[second]} points).`);
      } else if (scores[second] > scores[first]) {
        explanationParts.push(`In ${trait.name}, ${trait.desc[second]} (${scores[second]} points) is higher than ${trait.desc[first]} (${scores[first]} points).`);
      } else {
        explanationParts.push(`In ${trait.name}, ${trait.desc[first]} (${scores[first]} points) and ${trait.desc[second]} (${scores[second]} points) are equal.`);
      }
    });

    return `Your MBTI type (${mbtiType}) was determined for the following reasons:\n\n${explanationParts.join('\n')}`;
  };

  const mbtiExplanation = finalScores ? generateExplanation(type!, finalScores) : "Could not find MBTI type analysis information.";

  const shareTitle = `MBTI Life Recommendation Guide: ${result.name} (${type})`;
  const shareDescription = result.description;
  const shareImageUrl = `${window.location.origin}/mbti-recommend-app/vite.svg`; // Replace with an actual image URL if available
  const shareLink = window.location.href;

  const handleShareTwitter = () => {
    const text = `My MBTI is ${result.name} (${type}), and my recommended career is ${result.recommendation}! #MBTI #CareerRecommendation`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareLink)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleShareKakao = () => {
    if (Kakao && Kakao.isInitialized()) {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: shareTitle,
          description: shareDescription,
          imageUrl: shareImageUrl,
          link: {
            mobileWebUrl: shareLink,
            webUrl: shareLink,
          },
        },
        buttons: [
          {
            title: 'View Test Results',
            link: {
              mobileWebUrl: shareLink,
              webUrl: shareLink,
            },
          },
        ],
      });
    } else {
      alert('Kakao SDK is not initialized. Please check the developer tools.');
    }
  };

  const handleShareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy link.');
    }
  };

  const userMbtiStat = mbtiStatistics.find(stat => stat.type === type);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl text-center">
        <CardHeader>
          <CardDescription className="text-xl font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Your Type Is</CardDescription>
          <CardTitle className="text-5xl font-extrabold text-neutral-700 dark:text-neutral-300 mb-4">{type}</CardTitle>
          <CardTitle className="text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-4">{result.name}</CardTitle>
          <CardDescription className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">{result.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Recommended Career</h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-xl">{result.recommendation}</p>
          </div>

          {finalScores && (
            <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">Why did I get this MBTI type?</h2>
              <p className="text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">{mbtiExplanation}</p>
            </div>
          )}

          {userMbtiStat && (
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">MBTI Type Statistics</h2>
              <p className="text-blue-700 dark:text-blue-300">
                Your MBTI type, <span className="font-bold">{userMbtiStat.type}</span>, makes up about <span className="font-bold">{userMbtiStat.percentage}%</span> of the total population.
              </p>
              <p className="text-blue-700 dark:text-blue-300 mt-2">
                This is considered a {userMbtiStat.percentage > 10 ? "relatively common type" : userMbtiStat.percentage > 5 ? "moderately common type" : "rare type"}.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="flex flex-col space-y-4 w-full">
            <Button
              onClick={handleShareTwitter}
              className="w-full"
            >
              Share on Twitter
            </Button>
            <Button
              onClick={handleShareKakao}
              className="w-full"
            >
              Share on KakaoTalk
            </Button>
            <Button
              onClick={handleShareFacebook}
              className="w-full"
            >
              Share on Facebook
            </Button>
            <Button
              onClick={handleCopyLink}
              variant="neutral"
              className="w-full"
            >
              Copy Link
            </Button>
            <Link
              to="/"
              className="w-full"
            >
              <Button variant="default">
                다시 테스트하기
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultPage;
