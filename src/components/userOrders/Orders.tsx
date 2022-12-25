import { FC } from "react";
import useGetClientOrders from "../../hooks/query/useGetClientOrders";
import TextBoxContainer from "../textBox/TextBoxContainer";
import TextBoxContentWarper from "../textBox/TextBoxContentWarper";
import TextBoxHeader from "../textBox/TextBoxHeader";
import OrderList from "./OrderList";

type OrdersProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const Orders: FC<OrdersProps> = () => {
  const { clientOrders } = useGetClientOrders();

  return (
    <TextBoxContainer>
      <TextBoxContentWarper>
        <TextBoxHeader>
          <h2 className="text-2xl text-accent-main">Programarile mele</h2>
        </TextBoxHeader>
        {!(clientOrders && clientOrders.length) ? (
          <TextBoxHeader>
            <h3 className="py-10">Nu ia programari inca</h3>
          </TextBoxHeader>
        ) : (
          <OrderList orders={clientOrders} />
        )}
      </TextBoxContentWarper>
    </TextBoxContainer>
  );
};
export default Orders;
