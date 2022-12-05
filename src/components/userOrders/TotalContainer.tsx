import { FC } from 'react';

type TotalContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TotalContainer: FC<TotalContainerProps> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row justify-end flex-wrap gap-1 lg:gap-4'>
        {children}
      </div>
    </div>
  );
};
export default TotalContainer;
