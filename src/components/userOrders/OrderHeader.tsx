import { FC } from 'react';

type OrderHeaderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const OrderHeader: FC<OrderHeaderProps> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-row justify-between'>{children}</div>
    </div>
  );
};
export default OrderHeader;
