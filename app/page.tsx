import texts from "@/constants/texts";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center justify-center md:p-24 p-8 md:space-y-12 space-y-4">
      <h1 className="md:text-5xl text-2xl text-center">{texts.APP_TITLE}</h1>
      <div className="flex flex-col items-center space-y-4">
        <p
          role="welcome-message"
          className="whitespace-pre-line text-center text-lg">
          {texts.WELCOME_MESSAGE}
        </p>
        <Link href="/feedback">
          <Button
            role="start-btn"
            type="button"
            className="bg-primary-500 hover:bg-primary-700 rounded-md text-2xl text-white px-4 py-2"
            text={texts.FEEDBACK_START}
          />
        </Link>
      </div>
    </div>
  );
}
