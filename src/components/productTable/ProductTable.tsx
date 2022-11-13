import { FC } from 'react';
import ProductList from './ProductLIst';
import TableHeader from './TableHeader';
const ProductTable: FC = () => {
  return (
    <div className='p-4 lg:w-[70%] m-auto'>
      <TableHeader />
      <ProductList />
    </div>
  );
};
export default ProductTable;
