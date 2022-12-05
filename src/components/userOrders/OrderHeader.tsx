import { FC } from 'react';

type OrderHeaderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const OrderHeader: FC<OrderHeaderProps> = ({ children }) => {
  return (
    <div>
      <div className='flex flex-row justify-between flex-wrap-reverse'>
        {children}
      </div>
    </div>
  );
};
export default OrderHeader;
