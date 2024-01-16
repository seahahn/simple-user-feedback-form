import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("checks the width of progress bar", () => {
    const total = 100;
    const current = 33;

    render(<ProgressBar current={current} total={total} />);

    const progressBar = screen.getByRole("progress-bar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle({ width: (current / total) * 100 + "%" });
  });
});
