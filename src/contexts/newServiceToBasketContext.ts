import { createContext, useContext } from "react";
import { BasketHasService } from "../types/db/dbTypes";
import { SetNewService } from "../types/setTypes";

type NewServiceToBasketProp = {
  newService: BasketHasService;
  setNewService: SetNewService;
};

const NewServiceToBasketContext = createContext<NewServiceToBasketProp>(
  {} as NewServiceToBasketProp
);

export const useNewServiceToBasketContext = () =>
  useContext(NewServiceToBasketContext);

export default NewServiceToBasketContext;
