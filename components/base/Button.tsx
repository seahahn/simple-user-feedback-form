import React from "react";

interface IButton extends React.ComponentProps<"button"> {
  text: string;
}

const BaseButton = (props: IButton) => {
  return (
    <button
      role={props.role}
      type={props.type}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default BaseButton;
