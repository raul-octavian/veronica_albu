import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from '../components/profile/Profile';
import TabsContainer from '../components/tabNavigation/TabsContainer';
import TabsContentContainer from '../components/tabNavigation/TabsContentContainer';
import TabsContentItem from '../components/tabNavigation/TabsContentItem';
import TabsNavigationContainer from '../components/tabNavigation/TabsNavigationContainer';
import TabsNavigationLink from '../components/tabNavigation/TabsNavigationLink';
import Orders from '../components/userOrders/Orders';
import { useSessionContext } from '../contexts/sessionContext';

const MyAccount = () => {
  const [openTab, setOpenTab] = useState(1);

  const navigate = useNavigate();

  const { session } = useSessionContext();

  useEffect(() => {
    if (!session.user) {
      navigate('/login');
    }
  }, [session, navigate]);

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
            <Orders />
          </TabsContentItem>
        </TabsContentContainer>
      </TabsContainer>
    </>
  );
};

export default MyAccount;
