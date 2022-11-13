import Basket from '../components/basket/Basket';
import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxContent from '../components/textBox/TextBoxContent';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';
import { mockServices, ServicesContext } from '../contexts/servicesContext';

const Bookings = () => {
  return (
    <>
      <TextBoxHeader>
        <h1 className='text-accent-main text-4xl font-heading'>
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

      <TextBoxContainer>
        <TableTitle title='Lista de servicii' />
        <ServicesContext.Provider value={mockServices}>
          <ProductTable />
        </ServicesContext.Provider>
      </TextBoxContainer>
      <TextBoxContainer>
        <TableTitle title='Cosul meu' />
        <Basket />
      </TextBoxContainer>
      <TextBoxContainer>
        <TableTitle title='Programare' />
        <div className='py-8'>
          <div className='text-left text-xl w-full p-8 border border-accent-main lg:w-[70%] m-auto'>
            <p className='mb-2 pl-4'>
              Draga <span>Placeholder name,</span>
            </p>
            <p>Iti multumesc pentru comanda facuta.</p>
            <p>
              Te voi suna in cel mai scurt timp pentru a stabili impreuna
              detaliile prgramarii tale.
            </p>
            <p className='text-right mt-4 text-accent-main'>
              Cu drag, Veronica
            </p>
          </div>
        </div>
      </TextBoxContainer>
    </>
  );
};

export default Bookings;
