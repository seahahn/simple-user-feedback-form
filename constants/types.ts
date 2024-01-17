export type QuestionType = "radio" | "multi-select" | "open-ended";

export type QuestionsType = {
  [key: number]: {
    type: QuestionType;
    title: string;
  };
};

export type QuestionOptionType = {
  id: string;
  value: string;
  label: string;
};

export type QuestionOptionsType = {
  [key: number]: QuestionOptionType[];
};
