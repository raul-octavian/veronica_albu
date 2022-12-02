import { useDeletedServiceFromBasketContext } from '../../contexts/deletedServiceFromBasketContext';
import supabase from '../../supabase';

const useDeleteServiceFromBasket = () => {
  const { setDeletedService } = useDeletedServiceFromBasketContext();

  const deleteServiceFromBasket = async (
    basketId: string,
    serviceId: string
  ) => {
    const { data, error } = await supabase
      .from('basket_has_services')
      .delete()
      .match({ basket_id: basketId, service_id: serviceId })
      .select();

    if (error) {
      console.log({ error });
    }

    if (data) {
      setDeletedService(data[0]);
    }

  };

  return { deleteServiceFromBasket };
};
export default useDeleteServiceFromBasket;
