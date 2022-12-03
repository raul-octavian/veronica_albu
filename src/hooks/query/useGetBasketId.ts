import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { BasketStatusValues } from '../../types/db/dbEnums';

const useGetBasketId = () => {
  const { session } = useSessionContext();
  const useBasketId = async () => {
    let { data: basket_status } = await supabase
      .from('basket_status')
      .select('*');

    const BasketOpenId = () =>
      basket_status &&
      basket_status.find((item) => item.value === BasketStatusValues.OPEN);

    let { data: basket, error } = await supabase
      .from('basket')
      .select('id')
      .eq('status', BasketOpenId()?.id)
      .eq('client_id', session?.user?.id);

    error && console.log(error.message);
    return basket && basket[0]?.id;
  };
  return { useBasketId };
};

export default useGetBasketId;
