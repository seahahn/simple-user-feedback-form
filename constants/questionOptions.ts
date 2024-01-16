import texts from "./texts";

type QuestionOptionType = {
  id: string;
  value: string;
  label: string;
};

type QuestionOptionsType = {
  [key: number]: QuestionOptionType[];
};

const questionOptions: QuestionOptionsType = {
  1: [
    { id: "q1-1", value: "q1-1", label: texts.Q1_OPTION1_TEXT },
    { id: "q1-2", value: "q1-2", label: texts.Q1_OPTION2_TEXT },
    { id: "q1-3", value: "q1-3", label: texts.Q1_OPTION3_TEXT },
    { id: "q1-4", value: "q1-4", label: texts.Q1_OPTION4_TEXT },
    { id: "q1-5", value: "q1-5", label: texts.Q1_OPTION5_TEXT },
  ],
  2: [
    { id: "q2-1", value: "q2-1", label: texts.Q2_OPTION1_TEXT },
    { id: "q2-2", value: "q2-2", label: texts.Q2_OPTION2_TEXT },
    { id: "q2-3", value: "q2-3", label: texts.Q2_OPTION3_TEXT },
    { id: "q2-4", value: "q2-4", label: texts.Q2_OPTION4_TEXT },
    { id: "q2-5", value: "q2-5", label: texts.Q2_OPTION5_TEXT },
  ],
  3: [
    { id: "q3-1", value: "q3-1", label: texts.Q3_OPTION1_TEXT },
    { id: "q3-2", value: "q3-2", label: texts.Q3_OPTION2_TEXT },
    { id: "q3-3", value: "q3-3", label: texts.Q3_OPTION3_TEXT },
    { id: "q3-4", value: "q3-4", label: texts.Q3_OPTION4_TEXT },
    { id: "q3-5", value: "q3-5", label: texts.Q3_OPTION5_TEXT },
  ],
  4: [
    { id: "q4-1", value: "q4-1", label: texts.Q4_OPTION1_TEXT },
    { id: "q4-2", value: "q4-2", label: texts.Q4_OPTION2_TEXT },
    { id: "q4-3", value: "q4-3", label: texts.Q4_OPTION3_TEXT },
    { id: "q4-4", value: "q4-4", label: texts.Q4_OPTION4_TEXT },
    { id: "q4-5", value: "q4-5", label: texts.Q4_OPTION5_TEXT },
  ],
  5: [
    { id: "q5-1", value: "q5-1", label: texts.Q5_OPTION1_TEXT },
    { id: "q5-2", value: "q5-2", label: texts.Q5_OPTION2_TEXT },
    { id: "q5-3", value: "q5-3", label: texts.Q5_OPTION3_TEXT },
    { id: "q5-4", value: "q5-4", label: texts.Q5_OPTION4_TEXT },
    { id: "q5-5", value: "q5-5", label: texts.Q5_OPTION5_TEXT },
  ],
  6: [
    { id: "q6-1", value: "q6-1", label: texts.Q6_OPTION1_TEXT },
    { id: "q6-2", value: "q6-2", label: texts.Q6_OPTION2_TEXT },
    { id: "q6-3", value: "q6-3", label: texts.Q6_OPTION3_TEXT },
    { id: "q6-4", value: "q6-4", label: texts.Q6_OPTION4_TEXT },
    { id: "q6-5", value: "q6-5", label: texts.Q6_OPTION5_TEXT },
  ],
  7: [
    { id: "q7-1", value: "q7-1", label: texts.Q7_OPTION1_TEXT },
    { id: "q7-2", value: "q7-2", label: texts.Q7_OPTION2_TEXT },
    { id: "q7-3", value: "q7-3", label: texts.Q7_OPTION3_TEXT },
    { id: "q7-4", value: "q7-4", label: texts.Q7_OPTION4_TEXT },
    { id: "q7-5", value: "q7-5", label: texts.Q7_OPTION5_TEXT },
  ],
  8: [
    { id: "q8-1", value: "q8-1", label: texts.Q8_OPTION1_TEXT },
    { id: "q8-2", value: "q8-2", label: texts.Q8_OPTION2_TEXT },
    { id: "q8-3", value: "q8-3", label: texts.Q8_OPTION3_TEXT },
    { id: "q8-4", value: "q8-4", label: texts.Q8_OPTION4_TEXT },
    { id: "q8-5", value: "q8-5", label: texts.Q8_OPTION5_TEXT },
  ],
  10: [
    { id: "q10-1", value: "q10-1", label: texts.Q10_OPTION1_TEXT },
    { id: "q10-2", value: "q10-2", label: texts.Q10_OPTION2_TEXT },
    { id: "q10-3", value: "q10-3", label: texts.Q10_OPTION3_TEXT },
    { id: "q10-4", value: "q10-4", label: texts.Q10_OPTION4_TEXT },
    { id: "q10-5", value: "q10-5", label: texts.Q10_OPTION5_TEXT },
  ],
};

export default questionOptions;
