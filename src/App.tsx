import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import RoutesList from './RoutesList';

function App() {
  return (
    <div className='App box-border font-body'>
      <Navigation />
      <h1 className='text-3xl font-bold font-heading underline'>
        Hello world!
      </h1>
      <RoutesList />
      <Outlet />
    </div>
  );
}

export default App;
