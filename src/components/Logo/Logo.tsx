import { FC } from 'react';
import LogoIcon from '../../assets/logo_with_text.svg';
const Logo: FC = () => {
  return (
    <>
      <div className='flex justify-center items-center'>
        <img src={LogoIcon} alt=' Veronica Albu app logo' className='w-4/5 ' />
      </div>
      <div className='font-extraThin text-center'>
        <h2 className='text-accent-main font-body font-extraThin text-center font-thin'>
          Phy-academy certified artist
        </h2>
      </div>
    </>
  );
};
export default Logo;
