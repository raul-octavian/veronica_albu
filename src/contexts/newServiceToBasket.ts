import { createContext, useContext } from 'react';
import { BasketHasService } from '../types/db/dbTypes';

type NewServiceToBasketProp = {
  newService: BasketHasService;
  setNewService: React.Dispatch<React.SetStateAction<BasketHasService>>;
};

const NewServiceToBasketContext = createContext<NewServiceToBasketProp>(
  {} as NewServiceToBasketProp
);

export const useNewServiceToBasketContext = () =>
  useContext(NewServiceToBasketContext);

export default NewServiceToBasketContext;
