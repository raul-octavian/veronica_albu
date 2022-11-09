import { FC } from 'react';

const Address: FC = () => {
  return (
    <div className='ml-4'>
      <h3 className='capitalize font-body text-lg'>Adresa</h3>
      <p>
        Strada:<span className='ml-4'>Principala, nr 1</span>
      </p>
      <p className='capitalize'>
        Localitatea:<span className='ml-4'>Cerghizel</span>
      </p>
    </div>
  );
};
export default Address;
