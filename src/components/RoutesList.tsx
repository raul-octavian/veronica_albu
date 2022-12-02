import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Bookings from '../pages/Bookings';
import Gallery from '../pages/Gallery';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyAccount from '../pages/MyAccount';
import Register from '../pages/Register';

export enum ShowState {
  ALL = 'all',
  IN = 'in',
  OUT = 'out',
}

export type RoutesType = {
  name: string;
  path: string;
  show: ShowState;
  element: ReactNode;
};

export const allRoutes: RoutesType[] = [
  {
    name: 'Acasa',
    path: '/',
    show: ShowState.ALL,
    element: <Home />,
  },
  {
    name: 'Programeaza-ma',
    path: 'programare',
    show: ShowState.ALL,
    element: <Bookings />,
  },
  {
    name: 'Despre',
    path: 'despre',
    show: ShowState.ALL,
    element: <About />,
  },
  {
    name: 'Galerie',
    path: 'galerie',
    show: ShowState.ALL,
    element: <Gallery />,
  },
  {
    name: 'Contul-meu',
    path: 'contul-meu',
    show: ShowState.IN,
    element: <MyAccount />,
  },
  {
    name: 'Logheaza-te',
    path: 'login',
    show: ShowState.OUT,
    element: <Login />,
  },
  {
    name: 'Creaza cont',
    path: 'register',
    show: ShowState.OUT,
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
