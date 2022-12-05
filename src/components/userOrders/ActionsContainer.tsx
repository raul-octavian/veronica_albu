import { FC } from 'react';

type ActionsContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const ActionsContainer: FC<ActionsContainerProps> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-row justify-center flex-wrap gap-4'>
        {children}
      </div>
    </div>
  );
};
export default ActionsContainer;
