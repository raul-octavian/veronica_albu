import { FC } from 'react';

type OrderInfoItemProps = {
  label: string;
  value: string | number;
  currency?: string;
};

const OrderInfoItem: FC<OrderInfoItemProps> = ({ label, value, currency }) => {
  return (
    <div className='flex'>
      <p className='mr-1 uppercase text-accent-main'>{label}: </p>
      <p className='mr-1'>{value}</p>
      {currency && <span>{currency}</span>}
    </div>
  );
};
export default OrderInfoItem;
