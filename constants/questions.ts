import texts from "./texts";
import { QuestionType, QuestionsType } from "./types";

const questions: QuestionsType = {
  1: { type: "radio" as QuestionType, title: texts.QUESTION_1_TITLE },
  2: { type: "radio" as QuestionType, title: texts.QUESTION_2_TITLE },
  3: { type: "radio" as QuestionType, title: texts.QUESTION_3_TITLE },
  4: { type: "radio" as QuestionType, title: texts.QUESTION_4_TITLE },
  5: { type: "radio" as QuestionType, title: texts.QUESTION_5_TITLE },
  6: { type: "radio" as QuestionType, title: texts.QUESTION_6_TITLE },
  7: { type: "radio" as QuestionType, title: texts.QUESTION_7_TITLE },
  8: {
    type: "multi-select" as QuestionType,

    title: texts.QUESTION_8_TITLE,
  },
  9: {
    type: "open-ended" as QuestionType,

    title: texts.QUESTION_9_TITLE,
  },
  10: {
    type: "radio" as QuestionType,

    title: texts.QUESTION_10_TITLE,
  },
  11: {
    type: "open-ended" as QuestionType,

    title: texts.QUESTION_11_TITLE,
  },
  12: {
    type: "open-ended" as QuestionType,

    title: texts.QUESTION_12_TITLE,
  },
  13: {
    type: "open-ended" as QuestionType,

    title: texts.QUESTION_13_TITLE,
  },
};

export default questions;
