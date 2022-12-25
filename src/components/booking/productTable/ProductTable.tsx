import { FC } from "react";
import ProductList from "./ProductList";
import TableHeader from "./TableHeader";
const ProductTable: FC = () => {
  return (
    <div className="p-4 w-full lg:w-[70%] m-auto">
      <TableHeader />
      <ProductList />
    </div>
  );
};
export default ProductTable;
