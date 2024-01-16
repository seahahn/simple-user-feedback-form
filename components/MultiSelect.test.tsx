import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import MultiSelect from "./MultiSelect";
import { ChangeEvent } from "react";
import assert from "assert";

describe("MultiSelect", () => {
  // Mock data
  const options = [
    { id: "regular", value: "regular", label: "Regular" },
    { id: "medium", value: "medium", label: "Medium" },
    { id: "large", value: "large", label: "Large" },
  ];
  let selectedValues: string[] = [];

  // Mock function to change selected values
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedValues.includes(value)) {
      selectedValues = selectedValues.filter(
        (selectedOption) => selectedOption !== value
      );
    } else {
      selectedValues = [...selectedValues, value];
    }
  };

  // To render the multi select component
  const renderComponent = () => {
    render(
      <MultiSelect
        name="multi-select"
        options={options}
        selectedValues={selectedValues}
        onChange={handleChange}
      />
    );
  };

  it("checks all options are rendered", () => {
    renderComponent();

    options.forEach((option) => {
      const selectOption = screen.getByTestId(option.id);
      expect(selectOption).toBeInTheDocument();
      expect(selectOption).toHaveAttribute("value", option.value);
    });
  });

  it("checks all selected values are saved", () => {
    renderComponent();

    const option1 = screen.getByTestId(options[1].id);
    const option2 = screen.getByTestId(options[2].id);

    fireEvent.click(option1);
    fireEvent.click(option2);
    assert(selectedValues.includes(options[1].value));
    assert(selectedValues.includes(options[2].value));
  });
});
