import { FC, useEffect } from 'react';
import useGetOrderStatus from '../../hooks/query/useGetOrderStatus';
import { Order } from '../../types/db/dbTypes';
import OrderContainer from './OrderContainer';

type OrderListProps = {
  orders: Order[];
};

const OrderList: FC<OrderListProps> = ({ orders }) => {
  const { orderStatusList, getOrderStatus } = useGetOrderStatus();

  useEffect(() => {
    getOrderStatus();
  }, []);

  return (
    <div>
      {orders.map((order) => (
        <OrderContainer
          key={order.id}
          order={order}
          orderStatusList={orderStatusList}
        />
      ))}
    </div>
  );
};
export default OrderList;
