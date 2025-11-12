// src/data/mbtiStatistics.ts

export interface MbtiStatistic {
  type: string;
  percentage: number;
  description: string;
}

export const mbtiStatistics: MbtiStatistic[] = [
  { type: "ISTJ", percentage: 11.6, description: "청렴결백한 논리주의자" },
  { type: "ISFJ", percentage: 13.8, description: "용감한 수호자" },
  { type: "INFJ", percentage: 1.5, description: "선의의 옹호자" },
  { type: "INTJ", percentage: 2.1, description: "용의주도한 전략가" },
  { type: "ISTP", percentage: 5.4, description: "만능 재주꾼" },
  { type: "ISFP", percentage: 8.7, description: "호기심 많은 예술가" },
  { type: "INFP", percentage: 4.4, description: "열정적인 중재자" },
  { type: "INTP", percentage: 3.3, description: "논리적인 사색가" },
  { type: "ESTP", percentage: 4.3, description: "모험을 즐기는 사업가" },
  { type: "ESFP", percentage: 8.5, description: "자유로운 영혼의 연예인" },
  { type: "ENFP", percentage: 8.1, description: "재기발랄한 활동가" },
  { type: "ENTP", percentage: 3.2, description: "뜨거운 논쟁을 즐기는 변론가" },
  { type: "ESTJ", percentage: 8.7, description: "엄격한 관리자" },
  { type: "ESFJ", percentage: 12.3, description: "사교적인 외교관" },
  { type: "ENFJ", percentage: 2.5, description: "정의로운 사회 운동가" },
  { type: "ENTJ", percentage: 1.8, description: "대담한 통솔자" },
];
