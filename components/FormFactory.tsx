"use client";
import { questionType } from "@/constants/types";
import React, { ChangeEvent, useEffect } from "react";
import RadioBtnGroup from "./composite/RadioBtnGroup";
import MultiSelect from "./composite/MultiSelect";
import BaseTextArea from "./base/TextArea";
import questionOptions from "@/constants/questionOptions";
import texts from "@/constants/texts";
import Link from "next/link";
import BaseButton from "./base/Button";
import questions from "@/constants/questions";
import { useFeedbackStore } from "store/store";

type FormFactoryType = {
  questionNumber: number;
  questionType: questionType;
};

/**
 * To create a form based on the question type and number
 */
const FormFactory = (props: FormFactoryType) => {
  const feedbacks = useFeedbackStore((state) => state.feedbacks);
  const updateFeedbacks = useFeedbackStore((state) => state.updateFeedbacks);

  const questionNumber = props.questionNumber;
  const questionType = props.questionType;

  // To check whether the user has answered the question
  const isQuestionAnswered = !!feedbacks[questionNumber];
  // To check whether this is the last question
  const isLastQuestion = +questionNumber === Object.keys(questions).length;

  // When user tries to refresh or leave from the feedback page, alert the user
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  /**
   * To set the value of the selected radio button
   * @param value The value of the selected radio button
   */
  const handleRadioBtnGroupChange = (value: string) => {
    console.log("handleRadioBtnGroupChange", value);
    updateFeedbacks({ ...feedbacks, [questionNumber]: value });
  };

  /**
   * To set the value(s) of the selected multi-select option(s)
   * @param value The value of the selected multi-select option
   */
  const handleMultiSelectChange = (value: string) => {
    console.log("handleMultiSelectChange", value);
    const prevOptions = feedbacks[questionNumber] as string[];

    if (prevOptions?.includes(value)) {
      const result = prevOptions.filter(
        (selectedOption) => selectedOption !== value
      );
      updateFeedbacks({ ...feedbacks, [questionNumber]: result });
    } else {
      const result = prevOptions ? [...prevOptions, value] : [value];
      updateFeedbacks({ ...feedbacks, [questionNumber]: result });
    }
  };

  /**
   * To set the text value of the open-ended question
   * @param value The value of the open-ended question
   */
  const handleOpenEndedChange = (value: string) => {
    console.log("handleOpenEndedChange", value);
    updateFeedbacks({ ...feedbacks, [questionNumber]: value });
  };

  /**
   * To handle the change of the form based on the question type
   */
  const handleFormChange = (
    questionType: questionType,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    switch (questionType) {
      case "radio":
        handleRadioBtnGroupChange(value);
        break;
      case "multi-select":
        handleMultiSelectChange(value);
        break;
      case "open-ended":
        handleOpenEndedChange(value);
        break;
      default:
        break;
    }
  };
  const handleChange = handleFormChange.bind(null, questionType); // To send 'questionType' argument to 'handleFormChange' function

  /**
   * To submit the feedbacks
   * TODO: Send the feedbacks to the server
   */
  const handleSubmit = () => {
    console.log("Feedback Form Submit", feedbacks);
  };

  /**
   * To render the form based on the question type
   */
  const renderForm = ({ questionType }: { questionType: questionType }) => {
    switch (questionType) {
      case "radio":
        return (
          <RadioBtnGroup
            name="radio-btn-group"
            options={questionOptions[questionNumber]}
            selectedValue={feedbacks[questionNumber] as string}
            onChange={handleChange}
          />
        );
      case "multi-select":
        return (
          <MultiSelect
            options={questionOptions[questionNumber]}
            selectedValues={feedbacks[questionNumber] as string[]}
            onChange={handleChange}
          />
        );
      case "open-ended":
        return (
          <BaseTextArea
            value={feedbacks[questionNumber] as string}
            placeholder={texts.FEEDBACK_TEXTAREA_PLACEHOLDER}
            className="border-2 border-primary-500 focus:border-primary-700 w-full h-40 rounded-md p-2"
            onChange={handleChange}
          />
        );
      default:
        return <div>{texts.FEEDBACK_FORM_ERROR_TEXT}</div>;
    }
  };

  return (
    <>
      {renderForm({ questionType })}
      <div className="mt-8 flex w-full">
        <Link
          href={
            isLastQuestion ? "/feedback" : `/feedback/${+questionNumber + 1}`
          }>
          <BaseButton
            role="start-btn"
            type="button"
            className={`${
              isQuestionAnswered
                ? "bg-primary-500 hover:bg-primary-700"
                : "bg-primary-300"
            } rounded-md text-2xl text-white px-4 py-2 w-32`}
            disabled={!isQuestionAnswered} // If the answer exists, then the button is enabled
            text={
              isLastQuestion
                ? texts.FEEDBACK_SUBMIT_BTN_TEXT
                : texts.FEEDBACK_NEXT_BTN_TEXT
            }
            onClick={isLastQuestion ? handleSubmit : () => {}}
          />
        </Link>
      </div>
    </>
  );
};

export default FormFactory;
