import Basket from '../components/basket/Basket';
import LoginForm from '../components/login/LoginForm';
import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
import ThankYou from '../components/thankYou/ThankYou';
import { mockServices, ServicesContext } from '../contexts/servicesContext';

const Bookings = () => {
  return (
    <>
      <div>
        <p className='text-primary-main text-xl font-body text-center mb-8 '>
          Autentifica-te pt a continua
        </p>
        <LoginForm />
      </div>
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
