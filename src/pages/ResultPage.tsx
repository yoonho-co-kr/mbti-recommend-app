// src/pages/ResultPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { results } from '../data/results';
import { mbtiStatistics } from '../data/mbtiStatistics'; // Import statistics
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTranslation } from '../context/LanguageContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const Kakao: any; // Kakao SDK is a global object, typing it fully is beyond the scope of this task.

function ResultPage() {
  const { type } = useParams<{ type?: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    if (!scores) return t('mbti_analysis_not_found');

    const explanationParts: string[] = [];
    type TraitPair = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
    type TraitDescription = Record<TraitPair, string>;
    
    const traits: Array<{
      pair: [TraitPair, TraitPair];
      nameKey: string;
      desc: TraitDescription;
    }> = [
      { pair: ['E', 'I'], nameKey: 'energy_direction', desc: { E: t('extrovert'), I: t('introvert'), S: '', N: '', T: '', F: '', J: '', P: '' } },
      { pair: ['S', 'N'], nameKey: 'information_perception', desc: { S: t('sensing'), N: t('intuition'), E: '', I: '', T: '', F: '', J: '', P: '' } },
      { pair: ['T', 'F'], nameKey: 'judgment_criteria', desc: { T: t('thinking'), F: t('feeling'), E: '', I: '', S: '', N: '', J: '', P: '' } },
      { pair: ['J', 'P'], nameKey: 'lifestyle', desc: { J: t('judging'), P: t('perceiving'), E: '', I: '', S: '', N: '', T: '', F: '' } },
    ];

    traits.forEach(trait => {
      const [first, second] = trait.pair;
      if (scores[first] > scores[second]) {
        explanationParts.push(t('higher_score_part1') + t(trait.nameKey) + t('higher_score_part2') + trait.desc[first] + t('higher_score_part3') + scores[first] + t('higher_score_part4') + trait.desc[second] + t('higher_score_part5'));
      } else if (scores[second] > scores[first]) {
        explanationParts.push(t('higher_score_part1') + t(trait.nameKey) + t('higher_score_part2') + trait.desc[second] + t('higher_score_part3') + scores[second] + t('higher_score_part4') + trait.desc[first] + t('higher_score_part5'));
      } else {
        explanationParts.push(t('equal_score_part1') + t(trait.nameKey) + t('equal_score_part2') + trait.desc[first] + t('equal_score_part3') + scores[first] + t('equal_score_part4') + trait.desc[second] + t('equal_score_part5'));
      }
    });

    return t('mbti_derived_reason_part1') + mbtiType + t('mbti_derived_reason_part2') + '\n\n' + explanationParts.join('\n');
  };

  const mbtiExplanation = finalScores ? generateExplanation(type!, finalScores) : t('mbti_analysis_not_found');

  const shareTitle = `${t('app_title')}: ${t(result.nameKey)} (${type})`;
  const shareDescription = t(result.descriptionKey);
  const shareImageUrl = `${window.location.origin}/mbti-recommend-app/vite.svg`; // Replace with an actual image URL if available
  const shareLink = window.location.href;

  const handleShareTwitter = () => {
    const text = `${t('my_mbti_is')} ${t(result.nameKey)} (${type}), ${t('and_recommended_career_is')} ${t(result.recommendationKey)}! #MBTI #CareerRecommendation`;
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
            title: t('view_test_results'),
            link: {
              mobileWebUrl: shareLink,
              webUrl: shareLink,
            },
          },
        ],
      });
    } else {
      alert(t('kakao_sdk_not_initialized'));
    }
  };

  const handleShareFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}`;
    window.open(facebookShareUrl, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      alert(t('link_copied'));
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert(t('failed_to_copy_link'));
    }
  };

  const userMbtiStat = mbtiStatistics.find(stat => stat.type === type);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-xl text-center">
        <CardHeader>
          <CardDescription className="text-xl font-semibold text-primary-500 dark:text-primary-400 mb-2">{t('your_type_is')}</CardDescription>
          <CardTitle className="text-5xl font-extrabold text-primary-700 dark:text-primary-300 mb-4">{type}</CardTitle>
          <CardTitle className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">{t(result.nameKey)}</CardTitle>
          <CardDescription className="text-foreground text-lg mb-6">{t(result.descriptionKey)}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-primary-800 dark:text-primary-200 mb-3">{t('recommended_career')}</h2>
            <p className="text-primary-700 dark:text-primary-300 text-xl">{t(result.recommendationKey)}</p>
          </div>

          {finalScores && (
            <div className="bg-background p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-foreground mb-3">{t('why_this_mbti')}</h2>
              <p className="text-foreground whitespace-pre-wrap">{mbtiExplanation}</p>
            </div>
          )}

          {userMbtiStat && (
            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6 text-left">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-3">{t('mbti_statistics')}</h2>
              <p className="text-blue-700 dark:text-blue-300">
                {t('mbti_percentage_part1')}<span className="font-bold">{userMbtiStat.type}</span>{t('mbti_percentage_part2')}<span className="font-bold">{userMbtiStat.percentage}%</span>{t('mbti_percentage_part3')}
              </p>
              <p className="text-blue-700 dark:text-blue-300 mt-2">
                {userMbtiStat.percentage > 10 ? t('mbti_rarity_common') : userMbtiStat.percentage > 5 ? t('mbti_rarity_average') : t('mbti_rarity_rare')}
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
              {t('share_twitter')}
            </Button>
            <Button
              onClick={handleShareKakao}
              className="w-full"
            >
              {t('share_kakao')}
            </Button>
            <Button
              onClick={handleShareFacebook}
              className="w-full"
            >
              {t('share_facebook')}
            </Button>
            <Button
              onClick={handleCopyLink}
              className="w-full"
            >
              {t('copy_link')}
            </Button>
            <Link
              to="/"
              className="w-full"
            >
              <Button variant="default">
                {t('test_again')}
              </Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultPage;
