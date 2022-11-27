import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { BasketStatusValues } from '../../types/db/dbEnums';
import { BasketView } from '../../types/db/dbTypes';

const useGetBasket = () => {
  const [basket, setBasket] = useState<BasketView[] | null>(null);
  const [basketFetchError, setBasketFetchError] =
    useState<PostgrestError | null>(null);

  const { session } = useSessionContext();

  const fetchBasket = async () => {
    const { data, error } = await supabase
      .from('baskeview')
      .select(`*`)
      .eq('client_id', session.user.id)
      .ilike('basket_status', BasketStatusValues.OPEN);
    if (error) {
      setBasketFetchError(error);
      setBasket(null);
      console.log(error);
    }

    if (data) {
      setBasket(data);
      setBasketFetchError(null);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchBasket();
  }, []);

  return { basket, basketFetchError };
};

export default useGetBasket;
