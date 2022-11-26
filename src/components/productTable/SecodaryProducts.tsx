import { FC } from 'react';
import ProductItem, { UseTypeValues } from './ProductItem';
const SecondaryProducts: FC = () => {
  return (
    <div>
      <ProductItem
        name='Masaj degete'
        duration={15}
        price={25}
        id='002'
        use={UseTypeValues.SECOND}
        onMainChangeHandler={() => null}
      />
      <ProductItem
        name='Baie de ulei'
        duration={10}
        price={20}
        id='003'
        use={UseTypeValues.SECOND}
        onMainChangeHandler={() => null}
      />
      <ProductItem
        name='Lipit ornament'
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
