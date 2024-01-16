import React from "react";

interface ITextArea extends React.ComponentProps<"textarea"> {}

const BaseTextArea = (props: ITextArea) => {
  return (
    <textarea
      id={props.id}
      data-testid={props.id}
      name={props.name}
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}></textarea>
  );
};

export default BaseTextArea;
