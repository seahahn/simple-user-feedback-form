import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();

    const welcomeMsg = screen.getByRole("welcome-message");
    expect(welcomeMsg).toBeInTheDocument();

    const startBtn = screen.getByRole("start-btn");
    expect(startBtn).toBeInTheDocument();
  });
});
