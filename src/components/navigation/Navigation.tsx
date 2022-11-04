// import { Link } from 'react-router-dom';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { allRoutes } from '../../RoutesList';
import MainDiamond from '../../assets/main_diamond.jpg';

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* <!-- drawer init and show --> */}
      <div className='text-center'>
        <button
          className='text-accent-main bg-transparent focus:ring-4 focus:ring-accent-soft font-medium rounded-sm text-sm px-2 py-2 m-2 focus:outline-none '
          type='button'
          data-drawer-target='drawer-navigation'
          data-drawer-show='drawer-navigation'
          aria-controls='drawer-navigation'
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          Show navigation
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id='drawer-navigation'
        className={`absolute z-40 top-0 py-14 h-screen overflow-y-auto w-full max-w-full transition-all duration-300 font-heading uppercase text-accent-main tracking-[0.15rem] ${
          isDrawerOpen ? 'left-0' : '-left-[150%]'
        } `}
        aria-labelledby='drawer-navigation-label'
      >
        <button
          type='button'
          aria-controls='drawer-navigation'
          className='text-primary-main bg-transparent focus:ring-4 focus:ring-accent-soft rounded-lg text-md p-2 absolute top-2 left-2 inline-flex items-center'
          onClick={() => setIsDrawerOpen(false)}
        >
          <svg
            aria-hidden='true'
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Close menu</span>
        </button>
        <div className='py-4 overflow-y-auto w-full md:w-1/2 h-screen bg-secondary'>
          <ul className='space-y-2'>
            {allRoutes.map((item) => (
              <li
                key={item.name}
                onClick={() => setIsDrawerOpen(false)}
                className='group flex items-center hover:bg-primary-soft transform-all duration-300 lg:w-1/2 max-w-full rounded-md'
              >
                <Link
                  to={item.path}
                  className='flex items-center justify-start p-2 rounded-lg  text-accent-main font-extrabold'
                >
                  <svg
                    aria-hidden='true'
                    className='flex-shrink-0 w-6 h-6 transition duration-75'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z'
                      clipRule='evenodd'
                    ></path>
                  </svg>
                  <span className='flex-1 ml-3 whitespace-nowrap text-left transition-all duration-300 group-hover:tracking-wider'>
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        id='drawer-navigation'
        className={`none md:block absolute z-30 top-0 py-14 h-screen overflow-y-auto bg-secondary w-full max-w-full transition-all duration-300 font-heading uppercase text-accent-main tracking-[0.15rem] ${
          isDrawerOpen ? 'right-0' : '-right-[150%]'
        } `}
        aria-labelledby='drawer-navigation-label'
      >
        <div className=' none md:block overflow-y-auto w-full h-full bg-secondary'>
          <img
            src={MainDiamond}
            alt='nail art'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
