import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import RadioBtnGroup from "./RadioBtnGroup";
import { ChangeEvent } from "react";

describe("RadioBtnGroup", () => {
  // Mock data
  const options = [
    { id: "regular", value: "regular", label: "Regular" },
    { id: "medium", value: "medium", label: "Medium" },
    { id: "large", value: "large", label: "Large" },
  ];
  let selectedValue: string | undefined = undefined;

  // Mock function to change selected value
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    selectedValue = e.target.value;
  };

  // To render the radio button group component
  const renderComponent = () => {
    render(
      <RadioBtnGroup
        name="radio-btn-group"
        options={options}
        selectedValue={selectedValue}
        onChange={handleChange}
      />
    );
  };

  it("checks all options are rendered", () => {
    renderComponent();

    options.forEach((option) => {
      const radioBtn = screen.getByTestId(option.id);
      expect(radioBtn).toBeInTheDocument();
      expect(radioBtn).toHaveAttribute("value", option.value);
    });
  });

  it("checks the clicked option is checked", () => {
    renderComponent();

    const selectedOption = screen.getByTestId(options[1].id);

    fireEvent.click(selectedOption);
    expect(selectedValue).toBe(options[1].value);
  });
});
