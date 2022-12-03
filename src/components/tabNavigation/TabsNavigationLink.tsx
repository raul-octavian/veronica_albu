import { FC } from 'react';

type TabsNavigationLinkProps = {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
  tabNr: number;
  tabName: string;
};

const TabsNavigationLink: FC<TabsNavigationLinkProps> = ({
  openTab,
  setOpenTab,
  tabNr,
  tabName,
}) => {
  return (
    <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
      <a
        className={`block flex-1 focus:ring-4 focus:ring-accent-soft font-medium font-header rounded-lg text-lg uppercase tracking-widest px-6 py-3 focus:outline-none 
                  ${
                    openTab === tabNr
                      ? 'text-primary bg-accent-main'
                      : 'text-accent-main bg-primary-soft'
                  }`}
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(tabNr);
        }}
        data-toggle='tab'
        href='#link1'
        role='tablist'
      >
        {tabName}
      </a>
    </li>
  );
};
export default TabsNavigationLink;
