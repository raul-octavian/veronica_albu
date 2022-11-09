import { FC } from 'react';

import SimpleLogo from '../../assets/logo_simplu.svg';

import TextBoxContainer from '../textBox/TextBoxContainer';
import Button from '../navigation/Button';
import NavigationList from '../navigation/NavigationList';
import TextBoxHeader from '../textBox/TextBoxHeader';
import Address from './Address';
import SocialContacts from './SocialContacts';
import ContactForm from './ContactForm';

const Footer: FC = () => {
  return (
    <div>
      <TextBoxContainer>
        <div className='flex flex-wrap md:flex-col'>
          <div className='px-4 pt-14 flex-1 min-w-fit'>
            <div className='flex pb-8'>
              <div>
                <img src={SimpleLogo} alt='logo' />
              </div>
              <Address />
            </div>
            <SocialContacts />
          </div>
          <div className='px-4 pt-14 flex-1 min-w-[280px]'>
            <TextBoxHeader>
              <h2 className='text-2xl mb-4'>Contact</h2>
            </TextBoxHeader>
            <ContactForm />
          </div>
          <div className='flex-1 px-4 pt-14 shrink-0 min-w-[280px]'>
            <NavigationList />
          </div>
        </div>
      </TextBoxContainer>
    </div>
  );
};
export default Footer;
