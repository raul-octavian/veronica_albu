import Basket from '../components/basket/Basket';
import Intro from '../components/booking/Intro';
import FetchError from '../components/errors/FetchError';
import LoginForm from '../components/login/LoginForm';
import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
import ThankYou from '../components/thankYou/ThankYou';
import { ServicesContext } from '../contexts/servicesContext';
import { useSessionContext } from '../contexts/sessionContext';
import useGetServices from '../hooks/query/useGetServices';

const Bookings = () => {
  const { session } = useSessionContext();
  const userNotLoggedIn = !session?.user?.id;

  const { services, fetchError } = useGetServices();

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
      <TextBoxHeader>
        <h1 className='text-accent-main text-2xl font-heading'>
          Serviciile mele
        </h1>
      </TextBoxHeader>
      <Intro></Intro>

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
      <TextBoxContainer w='[80%]' lgW='[80%]'>
        <TableTitle title='Multumesc' />

        <ThankYou />
      </TextBoxContainer>
    </>
  );
};

export default Bookings;
