import React from "react";

interface IInput extends React.ComponentProps<"input"> {}

const BaseInput = (props: IInput) => {
  return (
    <input
      type={props.type}
      id={props.id}
      data-testid={props.id}
      name={props.name}
      className={props.className}
      value={props.value}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
};

export default BaseInput;
