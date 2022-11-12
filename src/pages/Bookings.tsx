import ProductTable from '../components/productTable/ProductTable';
import TableTitle from '../components/productTable/TableTitle';
import TextBoxContainer from '../components/textBox/TextBoxContainer';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import TextBoxWithCtaAndImage from '../components/textBox/TextBoxWithCtaAndImage';

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
        <p className='tracking-wider'>
          Aici iti poti programa serviciile de infrumusetare, te rog sa alegi un
          serviciu din lista de mai jos, pentru unele dintre ele o sa poti alege
          si servicii secundare compatibile.
        </p>
        <p className='tracking-wider'>
          Poti alege mai mult de un serviciu principal cu servicii secundare,
          dar doar daca sunt servicii compatibile intre ele, spre exemplu
          manichiura cu gel si cea simple nu sunt compatibile pretru ca se
          exclud reciproc
        </p>
      </TextBoxWithCtaAndImage>

      <TextBoxContainer>
        <TableTitle />
        <ProductTable />
      </TextBoxContainer>
    </>
  );
};

export default Bookings;
