import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Bookings from './pages/Bookings';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Register from './pages/Register';

export const allRoutes = [
  {
    name: 'Acasa',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Programeaza-ma',
    path: 'programare',
    element: <Bookings />,
  },
  {
    name: 'Despre',
    path: 'despre',
    element: <About />,
  },
  {
    name: 'Galerie',
    path: 'galerie',
    element: <Gallery />,
  },
  {
    name: 'Contul-meu',
    path: 'contul-meu',
    element: <MyAccount />,
  },
  {
    name: 'Logheaza-te',
    path: 'login',
    element: <Login />,
  },
  {
    name: 'Creaza cont',
    path: 'register',
    element: <Register />,
  },
];
const RoutesList = () => {
  return (
    <Routes>
      {allRoutes.map((item) => {
        return (
          <Route key={item.name} path={item.path} element={item.element} />
        );
      })}
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
};

export default RoutesList;
