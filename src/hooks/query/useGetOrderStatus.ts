import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import supabase from '../../supabase';
import { OrderStatus } from '../../types/db/dbTypes';

const useGetOrderStatus = () => {
  const [error, setError] = useState<PostgrestError | null>();
  const [orderStatusList, setOrderStatus] = useState<OrderStatus[]>();

  const getOrderStatus = async () => {
    let { data: order_status, error } = await supabase
      .from('order_status')
      .select('*');
    error && setError(error);
    order_status && setOrderStatus(order_status);
  };

  return { error, orderStatusList, getOrderStatus };
};

export default useGetOrderStatus;
