// src/data/questions.ts

export interface Answer {
  text: string;
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What do you usually do on weekends?",
    answers: [
      { text: "I actively spend time meeting new people outside.", type: "E" },
      { text: "I stay home, read books alone, or immerse myself in my favorite hobbies.", type: "I" }
    ]
  },
  {
    id: 2,
    question: "What way is comfortable for you when getting new information?",
    answers: [
      { text: "I prefer information based on facts, specific examples, and current experiences.", type: "S" },
      { text: "I try to grasp future possibilities, the overall context, and hidden meanings.", type: "N" }
    ]
  },
  {
    id: 3,
    question: "When a friend confides in you about their worries, what is your reaction?",
    answers: [
      { text: "I provide accurate analysis and logical solutions.", type: "T" },
      { text: "I empathize, understand their feelings, and comfort them.", type: "F" }
    ]
  },
  {
    id: 4,
    question: "What is your style when planning a trip?",
    answers: [
      { text: "I meticulously plan the itinerary in advance and follow it exactly.", type: "J" },
      { text: "I only set a broad framework and move flexibly according to local situations or mood.", type: "P" }
    ]
  },
  {
    id: 5,
    question: "When working on a task or assignment, what are you like?",
    answers: [
      { text: "I enjoy collaborating with various people and sharing ideas.", type: "E" },
      { text: "I prefer to concentrate quietly and handle things alone.", type: "I" }
    ]
  },
  {
    id: 6,
    question: "After watching a movie, what are your thoughts?",
    answers: [
      { text: "I vividly remember specific scenes or lines from the movie.", type: "S" },
      { text: "I think about the symbolism or hidden messages contained in the movie.", type: "N" }
    ]
  },
  {
    id: 7,
    question: "What do you consider more important when making a decision?",
    answers: [
      { text: "Rational judgment based on objective facts and data.", type: "T" },
      { text: "Considering the impact of the decision on others and harmony.", type: "F" }
    ]
  },
  {
    id: 8,
    question: "What is your reaction to a sudden change in plans?",
    answers: [
      { text: "I get stressed when plans go awry and try to make new ones.", type: "J" },
      { text: "I adapt flexibly to the situation and explore new possibilities.", type: "P" }
    ]
  },
  {
    id: 9,
    question: "What are you usually like at parties or gatherings?",
    answers: [
      { text: "I mingle with various people and am at the center of conversations.", type: "E" },
      { text: "I prefer to have deep conversations with a few close friends.", type: "I" }
    ]
  },
  {
    id: 10,
    question: "When learning a new skill, what are you like?",
    answers: [
      { text: "It's easier for me to follow step-by-step with real-world examples.", type: "S" },
      { text: "I first understand the basic principles and concepts and then grasp the overall picture.", type: "N" }
    ]
  },
  {
    id: 11,
    question: "When a friend wrongs you, what do you do?",
    answers: [
      { text: "I clearly distinguish right from wrong and honestly express my feelings.", type: "T" },
      { text: "I try to avoid conflict as much as possible to maintain the relationship.", type: "F" }
    ]
  },
  {
    id: 12,
    question: "What is the state of your desk?",
    answers: [
      { text: "It's always neatly organized, and everything is in its place.", type: "J" },
      { text: "I tend to find what I need amidst creative chaos.", type: "P" }
    ]
  }
];