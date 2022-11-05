import { FC } from 'react';
import LogoIcon from '../../assets/logo_with_text.svg';
const Logo: FC = () => {
  return (
    <div className='items-center flex-1 shrink-1 flex flex-col justify-center bg-gradient-radial from-secondary-main via-secondary-main to-transparent'>
      <div className='flex justify-center items-center '>
        <img
          src={LogoIcon}
          alt=' Veronica Albu app logo'
          className='w-4/5 shadow-current'
        />
      </div>
      <div className='font-extraThin text-center'>
        <h2 className='text-accent-main font-body font-extraThin text-center font-thin'>
          Phy-academy certified artist
        </h2>
      </div>
    </div>
  );
};
export default Logo;
