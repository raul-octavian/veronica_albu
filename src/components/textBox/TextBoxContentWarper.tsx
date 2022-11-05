import { FC } from 'react';

type TextBoxContentWarperProps = {
  children: JSX.Element | JSX.Element[];
};

const TextBoxContentWarper: FC<TextBoxContentWarperProps> = ({ children }) => {
  return <div className=' pt-14 pb-10 px-4'>{children}</div>;
};
export default TextBoxContentWarper;
