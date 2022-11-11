import { FC } from 'react';
import { UseTypeValues } from './ProductItem';

export enum PriceTypeValues {
  PRICE = 'price',
  DURATION = 'duration',
}

type PriceOrDurationBoxProps = {
  type: PriceTypeValues;
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
        {type === PriceTypeValues.PRICE && <span> ron</span>}
      </p>
    </div>
  );
};
export default PriceOrDurationBox;
