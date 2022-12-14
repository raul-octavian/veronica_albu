import { FC } from "react";

type ButtonProps = {
  value: string;
  type?: "button" | "submit" | "reset";
};

const Button: FC<ButtonProps> = ({ value, type = "button" }) => {
  return (
    <button
      className={`text-primary-main bg-accent-main focus:ring-4 focus:ring-accent-soft font-medium font-header rounded-lg text-lg uppercase tracking-widest w-[220px] px-6 py-2 m-2 focus:outline-none transition-all duration-300 hover:tracking-wide`}
      type={type}
    >
      {value}
    </button>
  );
};
export default Button;
