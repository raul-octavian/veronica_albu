import { FC } from 'react';
import { Link } from 'react-router-dom';
import { allRoutes } from '../../RoutesList';

type NavigationListProps = {
  onClickHandler: (value: React.SetStateAction<boolean>) => void;
};

const NavigationList: FC<NavigationListProps> = ({ onClickHandler }) => {
  return (
    <div className='p-4 overflow-y-auto w-full md:w-1/2 h-screen bg-secondary'>
      <ul className='space-y-2'>
        {allRoutes.map((item) => (
          <li
            key={item.name}
            onClick={() => onClickHandler(false)}
            className='group flex items-center hover:bg-primary-soft transform-all duration-300 lg:w-1/2 max-w-full rounded-md'
          >
            <Link
              to={item.path}
              className='flex items-center justify-start p-2 rounded-lg  text-accent-main font-extrabold'
            >
              <span className='flex-1 ml-3 whitespace-nowrap text-left transition-all duration-300 group-hover:tracking-wider'>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavigationList;
