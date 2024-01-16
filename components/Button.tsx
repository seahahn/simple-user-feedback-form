import React from "react";

interface IButton extends React.ComponentProps<"button"> {
  text: string;
}

const Button = (props: IButton) => {
  return (
    <button
      role={props.role}
      type={props.type}
      className={props.className}
      onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
