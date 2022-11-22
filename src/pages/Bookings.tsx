import Basket from '../components/basket/Basket';
import LoginForm from '../components/login/LoginForm';
import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
import ThankYou from '../components/thankYou/ThankYou';
import { mockServices, ServicesContext } from '../contexts/servicesContext';
import { useSessionContext } from '../contexts/sessionContext';

const Bookings = () => {
  const { session } = useSessionContext();

  const userLoggedIn = !session?.user?.id;

  if (userLoggedIn) {
    return (
      <div className='h-screen flex justify-center items-center flex-col'>
        <TextBoxHeader>
          <h1 className='text-accent-main text-2xl font-heading'>
            Serviciile mele
          </h1>
        </TextBoxHeader>
        <TextBoxHeader>
          <p className='text-primary-main text-xl font-body text-center mb-8 uppercase font-heading '>
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
      <TextBoxWithCtaAndImage>
        <p className='text-lg text-center mb-2 tracking-wide'>
          Bine ai venit Placeholder,
        </p>
        <p className='tracking-wider xl:w-[60%] m-auto mb-2'>
          Aici iti poti programa serviciile de infrumusetare, te rog sa alegi un
          serviciu din lista de mai jos, pentru unele dintre ele o sa poti alege
          si servicii secundare compatibile.
        </p>
        <p className='tracking-wider xl:w-[60%] m-auto'>
          Poti alege mai mult de un serviciu principal cu servicii secundare,
          dar doar daca sunt servicii compatibile intre ele, spre exemplu
          manichiura cu gel si cea simple nu sunt compatibile pretru ca se
          exclud reciproc
        </p>
      </TextBoxWithCtaAndImage>

      <TextBoxContainer w='[80%]' lgW='[80%]'>
        <TableTitle title='Lista de servicii' />
        <ServicesContext.Provider value={mockServices}>
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
