"use client";
import React from "react";
import BaseInput from "./base/Input";

interface IRadioBtnGroup extends React.ComponentProps<"input"> {
  options: { id: string; value: string; label: string }[];
  selectedValue?: string;
}

const RadioBtnGroup = (props: IRadioBtnGroup) => {
  return (
    <div className="w-full space-y-4">
      {props.options?.map((option) => (
        <label
          key={option.id}
          htmlFor={option.id}
          className={`block w-full p-4 bg-primary-500 text-white rounded-md cursor-pointer hover:bg-primary-600 ${
            props.selectedValue === option.value && "bg-primary-700"
          }`}>
          <BaseInput
            type="radio"
            name={props.name}
            value={option.value}
            id={option.id}
            className="hidden"
            checked={props.selectedValue === option.value}
            onChange={props.onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioBtnGroup;
