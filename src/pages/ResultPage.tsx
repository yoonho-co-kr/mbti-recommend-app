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
    if (!scores) return "MBTI 유형 분석 정보를 찾을 수 없습니다.";

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
      { pair: ['J', 'P'], name: '생활 양식', desc: { J: '판단형', P: '인식형', E: '', I: '', S: '', N: '', T: '', F: '' } },
    ];

    traits.forEach(trait => {
      const [first, second] = trait.pair;
      if (scores[first] > scores[second]) {
        explanationParts.push(`${trait.name}에서 ${trait.desc[first]} (${scores[first]}점)이 ${trait.desc[second]} (${scores[second]}점)보다 높게 나왔습니다.`);
      } else if (scores[second] > scores[first]) {
        explanationParts.push(`${trait.name}에서 ${trait.desc[second]} (${scores[second]}점)이 ${trait.desc[first]} (${scores[first]}점)보다 높게 나왔습니다.`);
      } else {
        explanationParts.push(`${trait.name}에서 ${trait.desc[first]} (${scores[first]}점)과 ${trait.desc[second]} (${scores[second]}점)이 동일하게 나왔습니다.`);
      }
    });

    return `당신의 MBTI 유형 (${mbtiType})은 다음과 같은 이유로 도출되었습니다:\n\n${explanationParts.join('\n')}`;
  };

  const mbtiExplanation = finalScores ? generateExplanation(type!, finalScores) : "MBTI 유형 분석 정보를 찾을 수 없습니다.";

  const shareTitle = `MBTI 라이프 추천 가이드: ${result.name} (${type})`;
  const shareDescription = result.description;
  const shareImageUrl = `${window.location.origin}/mbti-recommend-app/vite.svg`; // Replace with an actual image URL if available
  const shareLink = window.location.href;

  const handleShareTwitter = () => {
    const text = `제 MBTI는 ${result.name} (${type}) 이고, 추천 직업은 ${result.recommendation} 입니다! #MBTI #직업추천`;
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
            title: '테스트 결과 보기',
            link: {
              mobileWebUrl: shareLink,
              webUrl: shareLink,
            },
          },
        ],
      });
    } else {
      alert('카카오 SDK가 초기화되지 않았습니다. 개발자 도구를 확인해주세요.');
    }
  };

  const handleShareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert('링크가 클립보드에 복사되었습니다!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('링크 복사에 실패했습니다.');
    }
  };

  const userMbtiStat = mbtiStatistics.find(stat => stat.type === type);

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-xl text-center">
        <CardHeader>
          <CardDescription className="text-xl font-semibold text-neutral-500 dark:text-neutral-400 mb-2">당신의 유형은</CardDescription>
          <CardTitle className="text-5xl font-extrabold text-neutral-700 dark:text-neutral-300 mb-4">{type}</CardTitle>
          <CardTitle className="text-4xl font-bold text-neutral-600 dark:text-neutral-400 mb-4">{result.name}</CardTitle>
          <CardDescription className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">{result.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">추천 직업</h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-xl">{result.recommendation}</p>
          </div>

          {finalScores && (
            <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-3">왜 이 MBTI가 나왔을까요?</h2>
              <p className="text-neutral-700 dark:text-neutral-300 whitespace-pre-wrap">{mbtiExplanation}</p>
            </div>
          )}

          {userMbtiStat && (
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">MBTI 유형 통계</h2>
              <p className="text-blue-700 dark:text-blue-300">
                당신의 MBTI 유형인 <span className="font-bold">{userMbtiStat.type}</span>는 전체 인구의 약 <span className="font-bold">{userMbtiStat.percentage}%</span>를 차지합니다.
              </p>
              <p className="text-blue-700 dark:text-blue-300 mt-2">
                이는 {userMbtiStat.percentage > 10 ? "비교적 흔한 유형" : userMbtiStat.percentage > 5 ? "평균적인 유형" : "희귀한 유형"}에 속합니다.
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
              트위터로 공유하기
            </Button>
            <Button
              onClick={handleShareKakao}
              className="w-full"
            >
              카카오톡으로 공유하기
            </Button>
            <Button
              onClick={handleShareFacebook}
              className="w-full"
            >
              페이스북으로 공유하기
            </Button>
            <Button
              onClick={handleCopyLink}
              variant="neutral"
              className="w-full"
            >
              링크 복사하기
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
