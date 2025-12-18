import React from "react";

interface ButtonProps {
  label: string;
  message: string;
  style: string;
}

const Button: React.FC<ButtonProps> = ({ label, message, style }) => {
  return <button className={`btn ${style}`} onClick={() => alert(message)}>{label}</button>;
};

export default Button;
