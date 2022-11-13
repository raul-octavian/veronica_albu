import { FC } from 'react';
import CheckboxName from './CheckboxName';
import PriceOrDurationBox, { TypeValues } from './PriceOrDurationBox';

export enum UseTypeValues {
  MAIN = 'main',
  SECOND = 'second',
}

type ProductItemProps = {
  serviceName: string;
  duration: string | number;
  price: string | number;
  id: string;
  use: UseTypeValues;
  onMainChangeHandler: () => void;
  mainChecked?: boolean;
  checked?: boolean;
};

const ProductItem: FC<ProductItemProps> = ({
  serviceName,
  duration,
  price,
  onMainChangeHandler,
  id,
  use,
  mainChecked = false,
  checked,
}) => {
  return (
    <div className='grid grid-flow-row-dense grid-cols-12 auto-rows-max'>
      <div
        className={
          use === UseTypeValues.SECOND
            ? 'col-start-2 col-span-5 text-sm'
            : 'col-span-6 text-base'
        }
      >
        <CheckboxName
          serviceName={serviceName}
          id={id}
          onMainChangeHandler={onMainChangeHandler}
          checked={checked}
        />
      </div>
      <PriceOrDurationBox
        type={TypeValues.DURATION}
        value={duration}
        use={use}
      />
      <PriceOrDurationBox type={TypeValues.PRICE} value={price} use={use} />
      {use === UseTypeValues.MAIN && mainChecked && (
        <p className='col-start-2 col-span-10 text-xs'>extra:</p>
      )}
    </div>
  );
};
export default ProductItem;
