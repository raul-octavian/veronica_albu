import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { Order } from '../../types/db/dbTypes';

const useGetClientOrders = () => {
  const { session } = useSessionContext();

  const [clientOrders, setClientOrders] = useState<Order[]>();
  const [error, setError] = useState<PostgrestError | null>();

  const getClientOrders = async () => {
    if (session) {
      let { data: order, error } = await supabase
        .from('orders')
        .select(`*`)
        .eq('client_id', session.user?.id)
        .order('created_at', { ascending: false });

      error && setError(error);

      order && setClientOrders(order);
    }
  };

  useEffect(() => {
    getClientOrders();
  }, [session]);

  return { clientOrders, error };
};
export default useGetClientOrders;
