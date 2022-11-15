import { FC } from 'react';

import SimpleLogo from '../../assets/logo_simplu.svg';

import TextBoxContainer from '../textBox/TextBoxContainer';
import NavigationList from '../navigation/NavigationList';
import TextBoxHeader from '../textBox/TextBoxHeader';
import Address from './Address';
import SocialContacts from './SocialContacts';
import ContactForm from './ContactForm';

const Footer: FC = () => {
  return (
    <div>
      <TextBoxContainer>
        <div className='flex flex-wrap md:flex-row'>
          <div className='px-4 pt-14 flex-1 min-w-fit'>
            <div className='flex pb-8 flex-wrap'>
              <div>
                <img src={SimpleLogo} alt='logo' />
              </div>
              <Address />
            </div>
            <SocialContacts />
          </div>
          <div className='px-4 pt-14 flex-1 min-w-[260px]'>
            <TextBoxHeader>
              <h2 className='text-2xl mb-4'>Contact</h2>
            </TextBoxHeader>
            <ContactForm />
          </div>
          <div className='flex-1 px-4 pt-14 shrink-0 min-w-[260px]'>
            <NavigationList h='auto' lgw='full' />
          </div>
        </div>
        <div className='bg-primary-main text-secondary-main text-center p-4'>
          <p>© Raul-Octavian, 2022</p>
        </div>
      </TextBoxContainer>
    </div>
  );
};
export default Footer;
