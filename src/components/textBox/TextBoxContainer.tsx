import { FC } from "react";

type TextBoxContainerProps = {
  children?: JSX.Element | JSX.Element[];
  w?: string;
  lgW?: string;
};

const TextBoxContainer: FC<TextBoxContainerProps> = ({
  children,
  w = "[80%]",
  lgW = 'full',
}) => {
  return (
    <div className="mt-10">
      <div
        className={`w-${w} lg:w-${lgW} mx-auto bg-secondary-main text-primary-main`}
      >
        {children}
      </div>
    </div>
  );;;
};
export default TextBoxContainer;
