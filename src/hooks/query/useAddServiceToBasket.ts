import { useState } from "react";
import { useNewServiceToBasketContext } from "../../contexts/newServiceToBasketContext";
import { useSessionContext } from "../../contexts/sessionContext";
import supabase from "../../supabase";
import { Basket } from "../../types/db/dbTypes";

const useAddServiceToBasket = () => {
  const [newBasket, setNewBasket] = useState<Basket>();
  const { session } = useSessionContext();
  const [error, setError] = useState("");

  const { setNewService } = useNewServiceToBasketContext();

  const createBasket = async () => {
    const { data, error } = await supabase
      .from("basket")
      .insert({ client_id: session.user.id })
      .select();

    error && console.log(error);
    if (data) {
      setNewBasket(data[0]);
    }
  };

  const isServiceInBasket = async (basketId: string, service: string) => {
    let { data: basket_has_services, error } = await supabase
      .from("basket_has_services")
      .select("*")
      .eq("basket_id", basketId);

    error && console.log(error);

    if (basket_has_services) {
      return !!basket_has_services.find(
        (basket) => basket.service_id === service
      );
    }
    return false;
  };
  
  const addToBasket = async (service: string, basketId = "") => {
    const { data, error } = await supabase
      .from("basket_has_services")
      .insert({ basket_id: basketId, service_id: service })
      .select();

    error && console.log(error);

    if (data) {
      setNewService(data[0]);
    }
  };

  const addServiceToBasket = async (service: string, basketId = "") => {
    if (basketId) {
      const basketHasService = await isServiceInBasket(basketId, service);
      !basketHasService
        ? addToBasket(basketId, service)
        : setError("Serviciul este deja in cos");
    } else {
      createBasket();
      newBasket && addToBasket(newBasket?.id, service);
    }
  };

  return { addServiceToBasket, error };
};

export default useAddServiceToBasket;
