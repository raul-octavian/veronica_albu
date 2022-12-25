import { FC } from "react";

type TabsNavigationContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const TabsNavigationContainer: FC<TabsNavigationContainerProps> = ({
  children,
}) => {
  return (
    <ul className="flex mb-0 list-none flex-wrap p-4 flex-row" role="tablist">
      {children}
    </ul>
  );
};
export default TabsNavigationContainer;
