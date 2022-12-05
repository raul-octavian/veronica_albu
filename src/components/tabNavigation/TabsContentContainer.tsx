import { FC } from 'react';

type TabsContentContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TabsContentContainer: FC<TabsContentContainerProps> = ({ children }) => {
  return (
    <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 flex-1 '>
      <div className='px-4 py-5 flex-auto'>
        <div className='tab-content tab-space'>{children}</div>
      </div>
    </div>
  );
};
export default TabsContentContainer;
