import { PostgrestError } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { BasketView } from '../types/db/dbTypes';
import { SetBasket, SetError } from '../types/setTypes';
type BasketContextType = {
  basket: BasketView[] | null;
  setBasket: SetBasket;
  basketFetchError: PostgrestError | null;
  setBasketFetchError: SetError;
};

const BasketContext = createContext<BasketContextType>({} as BasketContextType);

export const useBasketContext = () => useContext(BasketContext);

export default BasketContext;
