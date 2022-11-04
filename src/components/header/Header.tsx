import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../navigation/Button';
import ButtonIcon from '../navigation/ButtonIcon';
import NavigationIcon from '../navigation/NavigationIcon';

type HeaderProps = {
  onClickHandler: (value: React.SetStateAction<boolean>) => void;
  isDrawerOpen?: boolean;
};

const Header: FC<HeaderProps> = ({ onClickHandler, isDrawerOpen }) => {
  return (
    <div className='flex items-center justify-between p-2 '>
      <ButtonIcon
        onClickHandler={onClickHandler}
        isDrawerOpen={isDrawerOpen}
        variant='accent'
      >
        <NavigationIcon />
      </ButtonIcon>
      <Link to='programare'>
        <Button value='Programeaza-te'></Button>
      </Link>
    </div>
  );
};
export default Header;
