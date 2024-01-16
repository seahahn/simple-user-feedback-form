import FormFactory from "@/components/FormFactory";
import questions from "@/constants/questions";
import React from "react";

const Feedback = ({
  params,
}: {
  params: {
    questionNumber: number;
  };
}) => {
  const questionNumber = params.questionNumber;
  const questionType = questions[questionNumber].type;

  return (
    <>
      <div className="md:w-1/2 w-full flex flex-col items-center">
        <FormFactory
          questionNumber={questionNumber}
          questionType={questionType}
        />
      </div>
    </>
  );
};

export default Feedback;
