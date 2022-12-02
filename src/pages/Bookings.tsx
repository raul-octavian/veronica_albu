import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import Basket from '../components/basket/Basket';
import Intro from '../components/booking/Intro';
import FetchError from '../components/errors/FetchError';
import LoginForm from '../components/login/LoginForm';
import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import ThankYou from '../components/thankYou/ThankYou';
import BasketContext from '../contexts/basketContext';
import NewServiceToBasketContext from '../contexts/newServiceToBasket';
import { ServicesContext } from '../contexts/servicesContext';
import { useSessionContext } from '../contexts/sessionContext';
import useGetBasket from '../hooks/query/useGetBasket';

import useGetServices from '../hooks/query/useGetServices';
import { BasketHasService, BasketView } from '../types/db/dbTypes';

const Bookings = () => {
  const { session } = useSessionContext();
  const userNotLoggedIn = !session?.user?.id;

  const { services, fetchError } = useGetServices();
  const [newService, setNewService] = useState<BasketHasService>(
    {} as BasketHasService
  );

  const [basket, setBasket] = useState<BasketView[] | null>(null);
  const [basketFetchError, setBasketFetchError] =
    useState<PostgrestError | null>(null);

  const { fetchBasket } = useGetBasket();

  useEffect(() => {
    if (session.user) {
      fetchBasket(setBasket, setBasketFetchError);
    }
  }, [newService, session]);

  if (userNotLoggedIn) {
    return (
      <div className='h-screen flex justify-center items-center flex-col'>
        <TextBoxHeader>
          <h1 className='text-accent-main text-2xl font-heading'>
            Serviciile mele
          </h1>
        </TextBoxHeader>
        <TextBoxHeader>
          <p className='text-primary-main text-xl text-center mb-8 uppercase font-heading '>
            Autentifica-te pentru a continua
          </p>
        </TextBoxHeader>
        <div className=' bg-secondary-main md:w-[80%] p-8 mt-8 '>
          <LoginForm />
        </div>
      </div>
    );
  }

  return (
    <>
      <NewServiceToBasketContext.Provider value={{ newService, setNewService }}>
        <TextBoxHeader>
          <h1 className='text-accent-main text-2xl font-heading'>
            Serviciile mele
          </h1>
        </TextBoxHeader>
        <Intro></Intro>
        <BasketContext.Provider
          value={{ basket, setBasket, basketFetchError, setBasketFetchError }}
        >
          <TextBoxContainer w='[80%]' lgW='[80%]'>
            <TableTitle title='Lista de servicii' />
            <ServicesContext.Provider value={services}>
              {fetchError && <FetchError error={fetchError}></FetchError>}
              <ProductTable />
            </ServicesContext.Provider>
          </TextBoxContainer>
          <TextBoxContainer w='[80%]' lgW='[80%]'>
            <TableTitle title='Cosul meu' />
            <Basket />
          </TextBoxContainer>
        </BasketContext.Provider>
        <TextBoxContainer w='[80%]' lgW='[80%]'>
          <TableTitle title='Multumesc' />

          <ThankYou />
        </TextBoxContainer>
      </NewServiceToBasketContext.Provider>
    </>
  );
};

export default Bookings;
