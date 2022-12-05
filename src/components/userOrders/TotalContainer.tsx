import { FC } from 'react';

type TotalContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TotalContainer: FC<TotalContainerProps> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-row justify-end flex-wrap gap-4'>
        {children}
      </div>
    </div>
  );
};
export default TotalContainer;
