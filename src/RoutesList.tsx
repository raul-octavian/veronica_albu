import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Products from './pages/Products';
import Register from './pages/Register';
import Services from './pages/Services';

export const allRoutes = [
  {
    name: 'Acasa',
    path: '/',
    element: <Home />,
  },
  {
    name: 'Programea-ma',
    path: 'programare',
    element: <Bookings />,
  },
  {
    name: 'Despre',
    path: 'despre',
    element: <About />,
  },
  {
    name: 'Servicii',
    path: 'servicii',
    element: <Services />,
  },
  {
    name: 'Produse',
    path: 'produse',
    element: <Products />,
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
