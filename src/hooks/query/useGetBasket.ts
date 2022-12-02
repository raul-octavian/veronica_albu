import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useNewServiceToBasketContext } from '../../contexts/newServiceToBasket';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { BasketStatusValues } from '../../types/db/dbEnums';
import { BasketView } from '../../types/db/dbTypes';

const useGetBasket = () => {
  const [basket, setBasket] = useState<BasketView[] | null>(null);
  const [basketFetchError, setBasketFetchError] =
    useState<PostgrestError | null>(null);

  const { session } = useSessionContext();

  const { newService } = useNewServiceToBasketContext();

  const fetchBasket = async () => {
    const { data, error } = await supabase
      .from('basketview')
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
      console.log({ data });
    }
  };

  console.log(newService);

  useEffect(() => {
    fetchBasket();
  }, [newService]);

  return { basket, basketFetchError, fetchBasket };
};

export default useGetBasket;
