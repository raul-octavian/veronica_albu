import { PostgrestError } from '@supabase/supabase-js';
import { useState } from 'react';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { BasketStatusValues } from '../../types/db/dbEnums';
import { Order } from '../../types/db/dbTypes';

const useCreateOrder = () => {
  const [orderError, setOrderError] = useState<PostgrestError | null>(null);
  const [orderInfo, setOrderInfo] = useState<Order[]>();
  const { session } = useSessionContext();
  const createOrder = async (
    basketId: string,
    value: number,
    duration: number
  ) => {
    if (basketId) {
      const { data, error } = await supabase
        .from('orders')
        .insert({
          basket: basketId,
          client_id: session.user.id,
          value: value,
          duration: duration,
        })
        .select();

      if (error) {
        setOrderError(error);
        console.log(error);
      }
      if (data) {
        let { data: basket_status } = await supabase
          .from('basket_status')
          .select('*');

        const basketClosed = () =>
          basket_status &&
          basket_status.find(
            (item) => item.value === BasketStatusValues.CLOSED
          );

        const { data: basketData, error } = await supabase
          .from('basket')
          .update({ status: basketClosed()?.id })
          .eq('id', basketId)
          .select();

        error && console.log(error);

        if (basketData) {
          console.log(basketData);
          console.log(data);
          setOrderInfo(data);
        }
      }
    }
  };

  return { orderError, createOrder, orderInfo };
};
export default useCreateOrder;
