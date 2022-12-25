import { FC, useState } from "react";
import { ComponentNames } from "../../../types/constants/componentNames";
import { Service } from "../../../types/db/dbTypes";
import ProductItem, { UseTypeValues } from "./ProductItem";

type ProductServiceProps = {
  service: Service;
};

const ProductElement: FC<ProductServiceProps> = ({ service }) => {
  const [mainChecked, setMainChecked] = useState(false);

  const onMainChangeHandler = () => {
    setMainChecked((checked) => !checked);
  };

  const { name, duration, price, id, type } = service;

  return (
    <div className="p-4 border border-accent-main my-2 ">
      <ProductItem
        name={name}
        duration={duration}
        price={price}
        id={id}
        use={type === 1 ? UseTypeValues.MAIN : UseTypeValues.SECOND}
        onMainChangeHandler={onMainChangeHandler}
        mainChecked={mainChecked}
        checked={mainChecked}
        location={ComponentNames.PRODUCT_LIST}
      />
    </div>
  );
};
export default ProductElement;
