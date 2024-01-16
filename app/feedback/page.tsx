import texts from "@/constants/texts";

export default function FeedbackComplete() {
  return (
    <div className="h-full flex flex-col items-center justify-center md:p-24 p-8 md:space-y-12 space-y-4">
      <div className="flex flex-col items-center space-y-4">
        <p
          role="complete-message"
          className="whitespace-pre-line text-center text-3xl">
          {texts.FEEDBACK_COMPLETE_TEXT}
        </p>
      </div>
    </div>
  );
}
