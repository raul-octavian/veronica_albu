import { FC, useMemo, useState } from 'react';
import { Order, OrderStatus } from '../../types/db/dbTypes';
import ActionsContainer from './ActionsContainer';
import OrderHeader from './OrderHeader';
import OrderInfoItem from './OrderInfoItem';
import OrderServices from './OrderServices';
import OrderState from './OrderState';
import ToggleActionButton from './ToggleActionButton';
import TotalContainer from './TotalContainer';

type OrderContainerProps = {
  children?: React.ReactNode | React.ReactNode[];
  order: Order;
  orderStatusList?: OrderStatus[];
};

const OrderContainer: FC<OrderContainerProps> = ({
  order,
  orderStatusList,
}) => {
  const { id, start, end, status, duration, value, basket } = order;

  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const printStatus = () => {
    if (orderStatusList) {
      const statusVal = orderStatusList.find((item) => item.id === status);
      return statusVal?.order_status;
    }
  };

  const toggleSection = () => {
    setIsMoreOpen((prevState) => !prevState);
  };

  const date = useMemo(() => {
    const d: Date | null | string = start && new Date(start);
    if (typeof d !== 'string' && d) {
      return d?.toDateString();
    }
  }, [start]);

  const startTime = useMemo(() => {
    const d: Date | null | string = start && new Date(start);
    if (typeof d !== 'string' && d) {
      return d?.toLocaleTimeString();
    }
  }, [start]);

  const endTime = useMemo(() => {
    const d: Date | null | string = end && new Date(end);
    if (typeof d !== 'string' && d) {
      return d?.toLocaleTimeString();
    }
  }, [end]);

  return (
    <div className='border border-accent-main px-2 lg:px-10 my-4 py-5'>
      <OrderHeader>
        <OrderInfoItem label='Nr' value={id} />
        {printStatus() && <OrderState statusId={printStatus() ?? ''} />}
      </OrderHeader>

      <div>
        <div className='flex flex-row justify-start flex-wrap gap-1 lg:gap-4'>
          <OrderInfoItem label='data' value={date ?? 'nespecificat'} />
          <OrderInfoItem label='de la' value={startTime ?? 'nespecificat'} />
          <OrderInfoItem label='pana la' value={endTime ?? 'nespecificat'} />
        </div>
      </div>
      {isMoreOpen && <OrderServices id={basket} />}

      <TotalContainer>
        <OrderInfoItem label='timp' value={duration ?? 0} currency='min' />
        <OrderInfoItem label='Total' value={value ?? 0} currency='ron' />
      </TotalContainer>
      <ActionsContainer>
        <ToggleActionButton
          value={!isMoreOpen ? 'mai mult' : 'mai putin'}
          onClickHandler={toggleSection}
        />
      </ActionsContainer>
    </div>
  );
};
export default OrderContainer;
