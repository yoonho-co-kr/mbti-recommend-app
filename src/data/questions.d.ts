// Type definitions for questions data

export interface Answer {
  text: string;
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

declare const questions: Question[];

export default questions;
