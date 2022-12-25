import { FC } from "react";

type OrderStatusProps = {
  statusId?: string;
};

const OrderState: FC<OrderStatusProps> = ({ statusId }) => {
  return (
    <div>
      <p className="block py-1 px-6 rounded-lg bg-accent-main text-primary-main">
        {statusId}
      </p>
    </div>
  );
};
export default OrderState;
