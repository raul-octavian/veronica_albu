import { PostgrestError } from '@supabase/supabase-js';
import { useState } from 'react';
import supabase from '../../supabase';
import { OrderServices } from '../../types/db/dbTypes';

const useGetOrderServices = (id: string) => {
  const [error, setError] = useState<PostgrestError | null>();

  const [services, setServices] = useState<OrderServices[]>();
  const getOrderServices = async () => {
    let { data: basketview, error } = await supabase
      .from('basketview')
      .select('name, duration, price, service_id')
      .eq('basket_id', id);

    error && setError(error);
    basketview && setServices(basketview);
  };

  getOrderServices();

  return { error, services };
};

export default useGetOrderServices;
