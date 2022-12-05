import { FC } from 'react';

type TabsContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TabsContainer: FC<TabsContainerProps> = ({ children }) => {
  return (
    <>
      <div className='flex flex-wrap min-h-screen tracking-wider'>
        <div className='w-full flex flex-col p-10'>{children}</div>
      </div>
    </>
  );
};
export default TabsContainer;
