import { FC } from 'react';

type TabsContentItemProps = {
  children: React.ReactNode | React.ReactNode[];
  openTab: number;
  tabNr: number;
};

const TabsContentItem: FC<TabsContentItemProps> = ({
  children,
  openTab,
  tabNr,
}) => {
  return (
    <div className={openTab === tabNr ? 'block' : 'hidden'} id={`link${tabNr}`}>
      {children}
    </div>
  );
};
export default TabsContentItem;
