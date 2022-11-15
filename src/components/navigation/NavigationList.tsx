import { FC } from 'react';
import { Link } from 'react-router-dom';
import { allRoutes } from '../../RoutesList';

type NavigationListProps = {
  onClickHandler?: (value: React.SetStateAction<boolean>) => void;
  h?: string;
  lgw?: string;
};

const NavigationList: FC<NavigationListProps> = ({
  onClickHandler,
  h = 'screen',
  lgw = '1/2',
}) => {
  return (
    <div
      className={`p-4 overflow-y-auto w-auto lg:w-${lgw} h-${h} bg-secondary-main`}
    >
      <ul className='space-y-2'>
        {allRoutes.map((item) => (
          <li
            key={item.name}
            onClick={() => (onClickHandler ? onClickHandler(false) : null)}
            className='group flex items-center hover:bg-primary-soft transform-all duration-300 w-full max-w-full rounded-md'
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
