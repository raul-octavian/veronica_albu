import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import SessionContext from "./contexts/sessionContext";
import useSession from "./hooks/useSession";
import RoutesList from "./components/RoutesList";

function App() {
  const { session, setSession } = useSession();

  return (
    <div
      className={`min-h-screen text-primary-main box-border font-body bg-[image:url('./assets/background.jpg')] bg-left-center bg-no-repeat bg-cover bg-fixed w-screen ms:bg-left `}
    >
      <SessionContext.Provider value={{ session, setSession }}>
        <Navigation />
        <RoutesList />
        <Outlet />
        <Footer />
      </SessionContext.Provider>
    </div>
  );
}

export default App;
