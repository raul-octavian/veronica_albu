import { useState } from 'react';

import DrawerBackdrop from './DrawerBackdrop';
import NavigationDrawer from './NavigationDrawer';
import Header from '../header/Header';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Header onClickHandler={setIsDrawerOpen} isDrawerOpen={isDrawerOpen} />

      <NavigationDrawer
        onClickHandler={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />

      <DrawerBackdrop
        onClickHandler={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
};

export default Navigation;
