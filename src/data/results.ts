// src/data/results.ts

export interface MBTIResult {
  nameKey: string;
  descriptionKey: string;
  recommendationKey: string;
  characteristicsKeys: string[];
  famousFiguresKeys: string[];
  bestEnvironmentsKeys: string[];
  growthTipsKeys: string[];
}

export const results: { [key: string]: MBTIResult } = {
  "ISTJ": {
    nameKey: "ISTJ_name",
    descriptionKey: "ISTJ_description",
    recommendationKey: "ISTJ_recommendation",
    characteristicsKeys: ["ISTJ_characteristics_1", "ISTJ_characteristics_2", "ISTJ_characteristics_3", "ISTJ_characteristics_4"],
    famousFiguresKeys: ["ISTJ_famous_figures_1", "ISTJ_famous_figures_2", "ISTJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ISTJ_best_environments_1", "ISTJ_best_environments_2", "ISTJ_best_environments_3"],
    growthTipsKeys: ["ISTJ_growth_tips_1", "ISTJ_growth_tips_2", "ISTJ_growth_tips_3"]
  },
  "ISFJ": {
    nameKey: "ISFJ_name",
    descriptionKey: "ISFJ_description",
    recommendationKey: "ISFJ_recommendation",
    characteristicsKeys: ["ISFJ_characteristics_1", "ISFJ_characteristics_2", "ISFJ_characteristics_3", "ISFJ_characteristics_4"],
    famousFiguresKeys: ["ISFJ_famous_figures_1", "ISFJ_famous_figures_2", "ISFJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ISFJ_best_environments_1", "ISFJ_best_environments_2", "ISFJ_best_environments_3"],
    growthTipsKeys: ["ISFJ_growth_tips_1", "ISFJ_growth_tips_2", "ISFJ_growth_tips_3"]
  },
  "INFJ": {
    nameKey: "INFJ_name",
    descriptionKey: "INFJ_description",
    recommendationKey: "INFJ_recommendation",
    characteristicsKeys: ["INFJ_characteristics_1", "INFJ_characteristics_2", "INFJ_characteristics_3", "INFJ_characteristics_4"],
    famousFiguresKeys: ["INFJ_famous_figures_1", "INFJ_famous_figures_2", "INFJ_famous_figures_3"],
    bestEnvironmentsKeys: ["INFJ_best_environments_1", "INFJ_best_environments_2", "INFJ_best_environments_3"],
    growthTipsKeys: ["INFJ_growth_tips_1", "INFJ_growth_tips_2", "INFJ_growth_tips_3"]
  },
  "INTJ": {
    nameKey: "INTJ_name",
    descriptionKey: "INTJ_description",
    recommendationKey: "INTJ_recommendation",
    characteristicsKeys: ["INTJ_characteristics_1", "INTJ_characteristics_2", "INTJ_characteristics_3", "INTJ_characteristics_4"],
    famousFiguresKeys: ["INTJ_famous_figures_1", "INTJ_famous_figures_2", "INTJ_famous_figures_3"],
    bestEnvironmentsKeys: ["INTJ_best_environments_1", "INTJ_best_environments_2", "INTJ_best_environments_3"],
    growthTipsKeys: ["INTJ_growth_tips_1", "INTJ_growth_tips_2", "INTJ_growth_tips_3"]
  },
  "ISTP": {
    nameKey: "ISTP_name",
    descriptionKey: "ISTP_description",
    recommendationKey: "ISTP_recommendation",
    characteristicsKeys: ["ISTP_characteristics_1", "ISTP_characteristics_2", "ISTP_characteristics_3", "ISTP_characteristics_4"],
    famousFiguresKeys: ["ISTP_famous_figures_1", "ISTP_famous_figures_2", "ISTP_famous_figures_3"],
    bestEnvironmentsKeys: ["ISTP_best_environments_1", "ISTP_best_environments_2", "ISTP_best_environments_3"],
    growthTipsKeys: ["ISTP_growth_tips_1", "ISTP_growth_tips_2", "ISTP_growth_tips_3"]
  },
  "ISFP": {
    nameKey: "ISFP_name",
    descriptionKey: "ISFP_description",
    recommendationKey: "ISFP_recommendation",
    characteristicsKeys: ["ISFP_characteristics_1", "ISFP_characteristics_2", "ISFP_characteristics_3", "ISFP_characteristics_4"],
    famousFiguresKeys: ["ISFP_famous_figures_1", "ISFP_famous_figures_2", "ISFP_famous_figures_3"],
    bestEnvironmentsKeys: ["ISFP_best_environments_1", "ISFP_best_environments_2", "ISFP_best_environments_3"],
    growthTipsKeys: ["ISFP_growth_tips_1", "ISFP_growth_tips_2", "ISFP_growth_tips_3"]
  },
  "INFP": {
    nameKey: "INFP_name",
    descriptionKey: "INFP_description",
    recommendationKey: "INFP_recommendation",
    characteristicsKeys: ["INFP_characteristics_1", "INFP_characteristics_2", "INFP_characteristics_3", "INFP_characteristics_4"],
    famousFiguresKeys: ["INFP_famous_figures_1", "INFP_famous_figures_2", "INFP_famous_figures_3"],
    bestEnvironmentsKeys: ["INFP_best_environments_1", "INFP_best_environments_2", "INFP_best_environments_3"],
    growthTipsKeys: ["INFP_growth_tips_1", "INFP_growth_tips_2", "INFP_growth_tips_3"]
  },
  "INTP": {
    nameKey: "INTP_name",
    descriptionKey: "INTP_description",
    recommendationKey: "INTP_recommendation",
    characteristicsKeys: ["INTP_characteristics_1", "INTP_characteristics_2", "INTP_characteristics_3", "INTP_characteristics_4"],
    famousFiguresKeys: ["INTP_famous_figures_1", "INTP_famous_figures_2", "INTP_famous_figures_3"],
    bestEnvironmentsKeys: ["INTP_best_environments_1", "INTP_best_environments_2", "INTP_best_environments_3"],
    growthTipsKeys: ["INTP_growth_tips_1", "INTP_growth_tips_2", "INTP_growth_tips_3"]
  },
  "ESTP": {
    nameKey: "ESTP_name",
    descriptionKey: "ESTP_description",
    recommendationKey: "ESTP_recommendation",
    characteristicsKeys: ["ESTP_characteristics_1", "ESTP_characteristics_2", "ESTP_characteristics_3", "ESTP_characteristics_4"],
    famousFiguresKeys: ["ESTP_famous_figures_1", "ESTP_famous_figures_2", "ESTP_famous_figures_3"],
    bestEnvironmentsKeys: ["ESTP_best_environments_1", "ESTP_best_environments_2", "ESTP_best_environments_3"],
    growthTipsKeys: ["ESTP_growth_tips_1", "ESTP_growth_tips_2", "ESTP_growth_tips_3"]
  },
  "ESFP": {
    nameKey: "ESFP_name",
    descriptionKey: "ESFP_description",
    recommendationKey: "ESFP_recommendation",
    characteristicsKeys: ["ESFP_characteristics_1", "ESFP_characteristics_2", "ESFP_characteristics_3", "ESFP_characteristics_4"],
    famousFiguresKeys: ["ESFP_famous_figures_1", "ESFP_famous_figures_2", "ESFP_famous_figures_3"],
    bestEnvironmentsKeys: ["ESFP_best_environments_1", "ESFP_best_environments_2", "ESFP_best_environments_3"],
    growthTipsKeys: ["ESFP_growth_tips_1", "ESFP_growth_tips_2", "ESFP_growth_tips_3"]
  },
  "ENFP": {
    nameKey: "ENFP_name",
    descriptionKey: "ENFP_description",
    recommendationKey: "ENFP_recommendation",
    characteristicsKeys: ["ENFP_characteristics_1", "ENFP_characteristics_2", "ENFP_characteristics_3", "ENFP_characteristics_4"],
    famousFiguresKeys: ["ENFP_famous_figures_1", "ENFP_famous_figures_2", "ENFP_famous_figures_3"],
    bestEnvironmentsKeys: ["ENFP_best_environments_1", "ENFP_best_environments_2", "ENFP_best_environments_3"],
    growthTipsKeys: ["ENFP_growth_tips_1", "ENFP_growth_tips_2", "ENFP_growth_tips_3"]
  },
  "ENTP": {
    nameKey: "ENTP_name",
    descriptionKey: "ENTP_description",
    recommendationKey: "ENTP_recommendation",
    characteristicsKeys: ["ENTP_characteristics_1", "ENTP_characteristics_2", "ENTP_characteristics_3", "ENTP_characteristics_4"],
    famousFiguresKeys: ["ENTP_famous_figures_1", "ENTP_famous_figures_2", "ENTP_famous_figures_3"],
    bestEnvironmentsKeys: ["ENTP_best_environments_1", "ENTP_best_environments_2", "ENTP_best_environments_3"],
    growthTipsKeys: ["ENTP_growth_tips_1", "ENTP_growth_tips_2", "ENTP_growth_tips_3"]
  },
  "ESTJ": {
    nameKey: "ESTJ_name",
    descriptionKey: "ESTJ_description",
    recommendationKey: "ESTJ_recommendation",
    characteristicsKeys: ["ESTJ_characteristics_1", "ESTJ_characteristics_2", "ESTJ_characteristics_3", "ESTJ_characteristics_4"],
    famousFiguresKeys: ["ESTJ_famous_figures_1", "ESTJ_famous_figures_2", "ESTJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ESTJ_best_environments_1", "ESTJ_best_environments_2", "ESTJ_best_environments_3"],
    growthTipsKeys: ["ESTJ_growth_tips_1", "ESTJ_growth_tips_2", "ESTJ_growth_tips_3"]
  },
  "ESFJ": {
    nameKey: "ESFJ_name",
    descriptionKey: "ESFJ_description",
    recommendationKey: "ESFJ_recommendation",
    characteristicsKeys: ["ESFJ_characteristics_1", "ESFJ_characteristics_2", "ESFJ_characteristics_3", "ESFJ_characteristics_4"],
    famousFiguresKeys: ["ESFJ_famous_figures_1", "ESFJ_famous_figures_2", "ESFJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ESFJ_best_environments_1", "ESFJ_best_environments_2", "ESFJ_best_environments_3"],
    growthTipsKeys: ["ESFJ_growth_tips_1", "ESFJ_growth_tips_2", "ESFJ_growth_tips_3"]
  },
  "ENFJ": {
    nameKey: "ENFJ_name",
    descriptionKey: "ENFJ_description",
    recommendationKey: "ENFJ_recommendation",
    characteristicsKeys: ["ENFJ_characteristics_1", "ENFJ_characteristics_2", "ENFJ_characteristics_3", "ENFJ_characteristics_4"],
    famousFiguresKeys: ["ENFJ_famous_figures_1", "ENFJ_famous_figures_2", "ENFJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ENFJ_best_environments_1", "ENFJ_best_environments_2", "ENFJ_best_environments_3"],
    growthTipsKeys: ["ENFJ_growth_tips_1", "ENFJ_growth_tips_2", "ENFJ_growth_tips_3"]
  },
  "ENTJ": {
    nameKey: "ENTJ_name",
    descriptionKey: "ENTJ_description",
    recommendationKey: "ENTJ_recommendation",
    characteristicsKeys: ["ENTJ_characteristics_1", "ENTJ_characteristics_2", "ENTJ_characteristics_3", "ENTJ_characteristics_4"],
    famousFiguresKeys: ["ENTJ_famous_figures_1", "ENTJ_famous_figures_2", "ENTJ_famous_figures_3"],
    bestEnvironmentsKeys: ["ENTJ_best_environments_1", "ENTJ_best_environments_2", "ENTJ_best_environments_3"],
    growthTipsKeys: ["ENTJ_growth_tips_1", "ENTJ_growth_tips_2", "ENTJ_growth_tips_3"]
  }
};