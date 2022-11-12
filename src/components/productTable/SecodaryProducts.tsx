import { FC } from 'react';
import ProductItem, { UseTypeValues } from './ProductItem';
const SecondaryProducts: FC = () => {
  return (
    <div>
      <ProductItem
        serviceName='Masaj degete'
        duration={15}
        price={25}
        id='002'
        use={UseTypeValues.SECOND}
        onMainChangeHandler={() => null}
      />
      <ProductItem
        serviceName='Baie de ulei'
        duration={10}
        price={20}
        id='003'
        use={UseTypeValues.SECOND}
        onMainChangeHandler={() => null}
      />
      <ProductItem
        serviceName='Lipit ornament'
        duration={5}
        price={5}
        id='004'
        use={UseTypeValues.SECOND}
        onMainChangeHandler={() => null}
      />
    </div>
  );
};
export default SecondaryProducts;
