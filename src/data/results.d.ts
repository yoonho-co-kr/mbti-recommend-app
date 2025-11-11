// Type definitions for results.js

export interface MBTIResult {
  name: string;
  description: string;
  recommendation: string;
  characteristics: string[];
  famous_figures: string[];
  best_environments: string[];
  growth_tips: string[];
}

export const results: {
  [key: string]: MBTIResult;
};
