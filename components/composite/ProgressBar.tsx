import React from "react";

interface IProgressBar {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: IProgressBar) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="fixed bottom-0 w-full bg-gray-200">
      <div
        role="progress-bar"
        className="bg-primary-500 h-4"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
