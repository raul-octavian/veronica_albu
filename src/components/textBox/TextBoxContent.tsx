import { FC } from 'react';

type TextBoxContentProps = {
  children: JSX.Element | JSX.Element[];
  image?: string;
};

const TextBoxContent: FC<TextBoxContentProps> = ({ image, children }) => {
  if (image) {
    return (
      <div className='lg:flex flex-row lg:relative justify-start'>
        <img
          src={image}
          alt='portrait'
          className='w-1/2 py-8 mx-auto lg:h-[500px] 2xl:w-[650px] lg:w-[500px] 2xl:h-[650px] lg:object-cover lg:mx-0'
        />
        <div className='lg:absolute bg-secondary-soft lg:p-10 lg:w-2/3 lg:right-0 md:top-[50%] lg:-translate-y-2/4'>
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
export default TextBoxContent;
