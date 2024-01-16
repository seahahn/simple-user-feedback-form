import ProgressBar from "@/components/composite/ProgressBar";
import questions from "@/constants/questions";

export default function FeedbackLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    questionNumber: number;
  };
}) {
  const questionNumber = params.questionNumber;
  return (
    <div className="h-full flex flex-col items-center justify-center md:p-24 p-8 md:space-y-12 space-y-4">
      <h2 className="md:text-4xl text-2xl text-center">
        {questions[questionNumber].title}
      </h2>
      {children}
      <ProgressBar
        current={questionNumber}
        total={Object.keys(questions).length}
      />
    </div>
  );
}
