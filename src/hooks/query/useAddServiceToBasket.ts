import { useState } from 'react';
import { useNewServiceToBasketContext } from '../../contexts/newServiceToBasket';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { Basket } from '../../types/db/dbTypes';

const useAddServiceToBasket = () => {
  const [newBasket, setNewBasket] = useState<Basket>();
  const [basketHasService, setBasketHasService] = useState(false);
  const { session } = useSessionContext();

  const { setNewService } = useNewServiceToBasketContext();

  const createBasket = async () => {
    const { data, error } = await supabase
      .from('basket')
      .insert({ client_id: session.user.id })
      .select();

    error && console.log(error);
    if (data) {
      setNewBasket(data[0]);
    }
  };

  const isServiceInBasket = async (basketId: string, service: string) => {
    let { data: basket_has_services, error } = await supabase
      .from('basket_has_services')
      .select('*')
      .eq('basket_id', basketId);

    if (basket_has_services) {
      setBasketHasService(
        !!basket_has_services.find((basket) => basket.service_id === service)
      );
    }
  };

  const addServiceToBasket = (basketId: string, service: string) => {
    const addToBasket = async (basketId: string, service: string) => {
      const { data, error } = await supabase
        .from('basket_has_services')
        .insert({ basket_id: basketId, service_id: service })
        .select();

      error && console.log(error);

      if (data) {
        console.log('new data', data);
        setNewService(data[0]);
      }
    };

    if (basketId) {
      console.log('is basket');
      isServiceInBasket(basketId, service);
      console.log('* \n\n\n', basketHasService, '\n\n\n\n');
      !basketHasService
        ? addToBasket(basketId, service)
        : console.log('product exists on basket');
    } else {
      console.log('new basket');
      createBasket();
      newBasket && addToBasket(newBasket?.id, service);
    }
  };

  return { addServiceToBasket };
};

export default useAddServiceToBasket;
