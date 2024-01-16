"use client";
import React from "react";
import BaseInput from "./base/Input";

interface IMultiSelect extends React.ComponentProps<"input"> {
  options: { id: string; value: string; label: string }[];
  selectedValues?: string[];
}

const MultiSelect = (props: IMultiSelect) => {
  return (
    <div className="space-y-4">
      {props.options?.map((option) => (
        <label
          key={option.id}
          className={`block w-full p-4 rounded-md cursor-pointer hover:bg-primary-600 ${
            props.selectedValues?.includes(option.value)
              ? "bg-primary-700 text-white"
              : "bg-primary-500 text-white"
          }`}>
          <BaseInput
            type="checkbox"
            value={option.value}
            id={option.id}
            className="hidden"
            checked={props.selectedValues?.includes(option.value)}
            onChange={props.onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default MultiSelect;
