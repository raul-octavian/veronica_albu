import { FC } from 'react';

type TestimonialsContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const TestimonialsContainer: FC<TestimonialsContainerProps> = ({
  children,
}) => {
  return (
    <div className='my-10'>
      <div className=' w-[80%] mx-auto text-primary-main  '>{children}</div>
    </div>
  );
};
export default TestimonialsContainer;
