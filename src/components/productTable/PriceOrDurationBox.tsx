import { FC } from 'react';
import { UseTypeValues } from './ProductItem';

export enum TypeValues {
  PRICE = 'price',
  DURATION = 'duration',
  TOTAL_DURATION = 'total_duration',
  TOTAL_PRICE = 'total_price',
}

type PriceOrDurationBoxProps = {
  type: TypeValues;
  value: string | number;
  use: UseTypeValues;
};

const PriceOrDurationBox: FC<PriceOrDurationBoxProps> = ({
  type,
  value,
  use,
}) => {
  return (
    <div className='col-span-3'>
      <p
        className={
          use === UseTypeValues.MAIN
            ? 'text-base text-center'
            : 'text-sm text-center'
        }
      >
        <span className='text-accent-main'>{value}</span>
        {type === TypeValues.PRICE && <span> ron</span>}
      </p>
    </div>
  );
};
export default PriceOrDurationBox;
