import { FC } from 'react';
import { Service } from '../../../types/db/dbTypes';
import CheckboxName from './CheckboxName';
import PriceOrDurationBox, { TypeValues } from './PriceOrDurationBox';
import { ComponentNames } from '../../../types/constants/componentNames';

export enum UseTypeValues {
  MAIN = 'main',
  SECOND = 'second',
}
type DisplayService = Pick<Service, 'name' | 'price' | 'duration' | 'id'>;

type ProductItemProps = DisplayService & {
  use: UseTypeValues;
  onMainChangeHandler: () => void;
  mainChecked?: boolean;
  checked?: boolean;
  location?: ComponentNames;
};

const ProductItem: FC<ProductItemProps> = ({
  name,
  duration,
  price,
  onMainChangeHandler,
  id,
  use,
  mainChecked = false,
  checked,
  location,
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
          name={name}
          id={id}
          onMainChangeHandler={onMainChangeHandler}
          checked={location === ComponentNames.BASKET}
          location={location}
        />
      </div>
      <PriceOrDurationBox
        type={TypeValues.DURATION}
        value={duration ?? 0}
        use={use}
      />
      <PriceOrDurationBox
        type={TypeValues.PRICE}
        value={price ?? 0}
        use={use}
      />
    </div>
  );
};
export default ProductItem;
