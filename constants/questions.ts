import texts from "./texts";
import { questionType } from "./types";

const questions = [
  { type: "radio" as questionType, number: 1, title: texts.QUESTION_1_TITLE },
  { type: "radio" as questionType, number: 2, title: texts.QUESTION_2_TITLE },
  { type: "radio" as questionType, number: 3, title: texts.QUESTION_3_TITLE },
  { type: "radio" as questionType, number: 4, title: texts.QUESTION_4_TITLE },
  { type: "radio" as questionType, number: 5, title: texts.QUESTION_5_TITLE },
  { type: "radio" as questionType, number: 6, title: texts.QUESTION_6_TITLE },
  { type: "radio" as questionType, number: 7, title: texts.QUESTION_7_TITLE },
  {
    type: "multi-select" as questionType,
    number: 8,
    title: texts.QUESTION_8_TITLE,
  },
  {
    type: "open-ended" as questionType,
    number: 9,
    title: texts.QUESTION_9_TITLE,
  },
  {
    type: "radio" as questionType,
    number: 10,
    title: texts.QUESTION_10_TITLE,
  },
  {
    type: "open-ended" as questionType,
    number: 11,
    title: texts.QUESTION_11_TITLE,
  },
  {
    type: "open-ended" as questionType,
    number: 12,
    title: texts.QUESTION_12_TITLE,
  },
  {
    type: "open-ended" as questionType,
    number: 13,
    title: texts.QUESTION_13_TITLE,
  },
];

export default questions;
