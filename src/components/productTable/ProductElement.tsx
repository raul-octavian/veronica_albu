import { FC, useState } from 'react';
import { Service } from '../../types/service';
import ProductItem, { UseTypeValues } from './ProductItem';
import SecondaryProducts from './SecodaryProducts';

type ProductServiceProps = {
  service: Service;
};

const ProductElement: FC<ProductServiceProps> = ({ service }) => {
  const [mainChecked, setMainChecked] = useState(false);

  const onMainChangeHandler = () => {
    setMainChecked((checked) => !checked);
  };

  const { serviceName, duration, price, id, type } = service;

  return (
    <div className='p-4 border border-accent-main my-2 '>
      <ProductItem
        serviceName={serviceName}
        duration={duration}
        price={price}
        id={id}
        use={type === 1 ? UseTypeValues.MAIN : UseTypeValues.SECOND}
        onMainChangeHandler={onMainChangeHandler}
        mainChecked={mainChecked}
      />
      {mainChecked && <SecondaryProducts />}
    </div>
  );
};
export default ProductElement;