// src/pages/ResultPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { results } from '../data/results';
import { mbtiStatistics } from '../data/mbtiStatistics'; // Import statistics
import { Button } from '@/components/ui/button'; // Import the Button component

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

    const explanationParts = [];
    const traits = [
      { pair: ['E', 'I'], name: '에너지의 방향', desc: { E: '외향형', I: '내향형' } },
      { pair: ['S', 'N'], name: '정보 인식', desc: { S: '감각형', N: '직관형' } },
      { pair: ['T', 'F'], name: '판단 기준', desc: { T: '사고형', F: '감정형' } },
      { pair: ['J', 'P'], name: '생활 양식', desc: { J: '판단형', P: '인식형' } },
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
    const url = shareLink;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
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

        {finalScores && (
          <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">왜 이 MBTI가 나왔을까요?</h2>
            <p className="text-gray-700 whitespace-pre-wrap">{mbtiExplanation}</p>
          </div>
        )}

        {userMbtiStat && (
          <div className="bg-blue-50 p-6 rounded-lg mb-6 text-left">
            <h2 className="text-2xl font-bold text-blue-800 mb-3">MBTI 유형 통계</h2>
            <p className="text-blue-700">
              당신의 MBTI 유형인 <span className="font-bold">{userMbtiStat.type}</span>는 전체 인구의 약 <span className="font-bold">{userMbtiStat.percentage}%</span>를 차지합니다.
            </p>
            <p className="text-blue-700 mt-2">
              이는 {userMbtiStat.percentage > 10 ? "비교적 흔한 유형" : userMbtiStat.percentage > 5 ? "평균적인 유형" : "희귀한 유형"}에 속합니다.
            </p>
          </div>
        )}
        
        <div className="flex flex-col space-y-4">
          <Button
            onClick={handleShareTwitter}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            트위터로 공유하기
          </Button>
          <Button
            onClick={handleShareKakao}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            카카오톡으로 공유하기
          </Button>
          <Button
            onClick={handleShareFacebook}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            페이스북으로 공유하기
          </Button>
          <Button
            onClick={handleCopyLink}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            링크 복사하기
          </Button>
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
