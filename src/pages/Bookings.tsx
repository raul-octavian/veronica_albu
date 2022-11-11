import ProductItem, {
  UseTypeValues,
} from '../components/productTable/ProductItem';
import TableHeader from '../components/productTable/TableHeader';
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
        <TableHeader />
        <div>
          <div className='p-4 border border-accent-main my-2 '>
            <ProductItem
              serviceName='Manichiura simpla'
              duration={60}
              price={150}
              id='001'
              use={UseTypeValues.MAIN}
            />
            <ProductItem
              serviceName='Masaj degete'
              duration={15}
              price={25}
              id='002'
              use={UseTypeValues.SECOND}
            />
            <ProductItem
              serviceName='Baie de ulei'
              duration={10}
              price={20}
              id='003'
              use={UseTypeValues.SECOND}
            />
            <ProductItem
              serviceName='Lipit ornament'
              duration={5}
              price={5}
              id='004'
              use={UseTypeValues.SECOND}
            />
          </div>
        </div>
      </TextBoxContainer>
    </>
  );
};

export default Bookings;
