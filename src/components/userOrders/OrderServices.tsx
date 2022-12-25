import { FC } from "react";
import useGetOrderServices from "../../hooks/query/useGetOrderServices";
import FetchError from "../errors/FetchError";
import TableHeader from "../booking/productTable/TableHeader";
import Service from "./Service";

type OrderServiceProps = {
  id: string;
};
const OrderServices: FC<OrderServiceProps> = ({ id }) => {
  const { error, services } = useGetOrderServices(id);

  if (error) {
    return <FetchError error={error}></FetchError>;
  }
  return (
    <div>
      <div className="w-full m-auto my-3">
        <TableHeader />
        <div>
          {services?.map((service) => (
            <Service service={service} key={service.service_id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OrderServices;
