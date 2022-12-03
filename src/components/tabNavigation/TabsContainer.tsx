import {  FC } from 'react';

type TabsContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TabsContainer: FC<TabsContainerProps> = ({ children }) => {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>{children}</div>
      </div>
    </>
  );
};
export default TabsContainer;
