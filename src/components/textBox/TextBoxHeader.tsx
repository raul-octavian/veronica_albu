import { FC } from "react";

type TextBoxHeaderProps = {
  children: JSX.Element | JSX.Element[];
};

const TextBoxHeader: FC<TextBoxHeaderProps> = ({ children }) => {
  return (
    <div className="text-center text-2xl tracking-wider capitalize font-heading">
      {" "}
      {children}
    </div>
  );
};
export default TextBoxHeader;
