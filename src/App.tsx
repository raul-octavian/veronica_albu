import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import RoutesList from './RoutesList';

function App() {
  return (
    <div
      className={`min-h-screen text-primary-main box-border font-body bg-[image:url('./assets/background.jpg')] bg-left-center bg-no-repeat bg-cover bg-fixed w-screen ms:bg-left `}
    >
      <Navigation />
      <RoutesList />
      <Outlet />
    </div>
  );
}

export default App;
