import { useState } from 'react';
import Profile from '../components/profile/Profile';
import TabsContainer from '../components/tabNavigation/TabsContainer';
import TabsContentContainer from '../components/tabNavigation/TabsContentContainer';
import TabsContentItem from '../components/tabNavigation/TabsContentItem';
import TabsNavigationContainer from '../components/tabNavigation/TabsNavigationContainer';
import TabsNavigationLink from '../components/tabNavigation/TabsNavigationLink';

const MyAccount = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <TabsContainer>
        <TabsNavigationContainer>
          <TabsNavigationLink
            openTab={openTab}
            setOpenTab={setOpenTab}
            tabName='Profil'
            tabNr={1}
          ></TabsNavigationLink>
          <TabsNavigationLink
            openTab={openTab}
            setOpenTab={setOpenTab}
            tabName='Programarile mele'
            tabNr={2}
          ></TabsNavigationLink>
        </TabsNavigationContainer>

        <TabsContentContainer>
          <TabsContentItem openTab={openTab} tabNr={1}>
            <Profile />
          </TabsContentItem>
          <TabsContentItem openTab={openTab} tabNr={2}>
            <p>
              Completely synergize resource taxing relationships via premier
              niche markets. Professionally cultivate one-to-one customer
              service with robust ideas.
              <br />
              <br />
              Dynamically innovate resource-leveling customer service for state
              of the art customer service.
            </p>
          </TabsContentItem>
        </TabsContentContainer>
      </TabsContainer>
    </>
  );
};

export default MyAccount;
