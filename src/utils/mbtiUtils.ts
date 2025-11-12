// src/utils/mbtiUtils.ts

export const calculateMbtiType = (scores: { [key: string]: number }): string => {
  let mbtiType = "";
  mbtiType += scores.E > scores.I ? "E" : "I";
  mbtiType += scores.S > scores.N ? "S" : "N";
  mbtiType += scores.T > scores.F ? "T" : "F";
  mbtiType += scores.J > scores.P ? "J" : "P";
  return mbtiType;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
