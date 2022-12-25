import { FC } from "react";
import { OrderServices } from "../../types/db/dbTypes";
import PriceOrDurationBox, {
  TypeValues,
} from "../booking/productTable/PriceOrDurationBox";
import { UseTypeValues } from "../booking/productTable/ProductItem";

type ServiceProps = {
  service: OrderServices;
};
const Service: FC<ServiceProps> = ({ service }) => {
  const { name, duration, price } = service;
  const use = UseTypeValues.MAIN;
  return (
    <div className="grid grid-flow-row-dense grid-cols-12 auto-rows-max">
      <div className="col-span-6 text-base">
        <div className="text-left tracking-wider font-body">{name}</div>
      </div>
      <PriceOrDurationBox
        type={TypeValues.DURATION}
        value={duration ?? 0}
        use={use}
      />
      <PriceOrDurationBox
        type={TypeValues.PRICE}
        value={price ?? 0}
        use={use}
      />
    </div>
  );
};
export default Service;
