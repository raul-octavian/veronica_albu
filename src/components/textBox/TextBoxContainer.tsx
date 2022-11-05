import { FC } from 'react';

type TextBoxContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const TextBoxContainer: FC<TextBoxContainerProps> = ({ children }) => {
  return (
    <div className='my-10'>
      <div className=' w-[80%] mx-auto bg-secondary-main text-primary-main  '>
        {children}
      </div>
    </div>
  );
};
export default TextBoxContainer;
