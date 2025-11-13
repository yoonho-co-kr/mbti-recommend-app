// src/data/questions.ts

export interface Answer {
  textKey: string; // Changed to textKey
  type: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
  id: number;
  questionKey: string; // Changed to questionKey
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    questionKey: "weekend_activity",
    answers: [
      { textKey: "weekend_activity_e", type: "E" },
      { textKey: "weekend_activity_i", type: "I" }
    ]
  },
  {
    id: 2,
    questionKey: "new_info_method",
    answers: [
      { textKey: "new_info_method_s", type: "S" },
      { textKey: "new_info_method_n", type: "N" }
    ]
  },
  {
    id: 3,
    questionKey: "friend_confides",
    answers: [
      { textKey: "friend_confides_t", type: "T" },
      { textKey: "friend_confides_f", type: "F" }
    ]
  },
  {
    id: 4,
    questionKey: "travel_planning_style",
    answers: [
      { textKey: "travel_planning_style_j", type: "J" },
      { textKey: "travel_planning_style_p", type: "P" }
    ]
  },
  {
    id: 5,
    questionKey: "task_assignment_approach",
    answers: [
      { textKey: "task_assignment_approach_e", type: "E" },
      { textKey: "task_assignment_approach_i", type: "I" }
    ]
  },
  {
    id: 6,
    questionKey: "movie_thoughts",
    answers: [
      { textKey: "movie_thoughts_s", type: "S" },
      { textKey: "movie_thoughts_n", type: "N" }
    ]
  },
  {
    id: 7,
    questionKey: "decision_making_priority",
    answers: [
      { textKey: "decision_making_priority_t", type: "T" },
      { textKey: "decision_making_priority_f", type: "F" }
    ]
  },
  {
    id: 8,
    questionKey: "sudden_plan_change",
    answers: [
      { textKey: "sudden_plan_change_j", type: "J" },
      { textKey: "sudden_plan_change_p", type: "P" }
    ]
  },
  {
    id: 9,
    questionKey: "party_gathering_behavior",
    answers: [
      { textKey: "party_gathering_behavior_e", type: "E" },
      { textKey: "party_gathering_behavior_i", type: "I" }
    ]
  },
  {
    id: 10,
    questionKey: "new_skill_learning",
    answers: [
      { textKey: "new_skill_learning_s", type: "S" },
      { textKey: "new_skill_learning_n", type: "N" }
    ]
  },
  {
    id: 11,
    questionKey: "friend_wronged_you",
    answers: [
      { textKey: "friend_wronged_you_t", type: "T" },
      { textKey: "friend_wronged_you_f", type: "F" }
    ]
  },
  {
    id: 12,
    questionKey: "desk_state",
    answers: [
      { textKey: "desk_state_j", type: "J" },
      { textKey: "desk_state_p", type: "P" }
    ]
  }
];