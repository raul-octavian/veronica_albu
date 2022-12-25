import { useSessionContext } from "../../contexts/sessionContext";
import supabase from "../../supabase";
import { BasketStatusValues } from "../../types/db/dbEnums";
import { SetBasket, SetError } from "../../types/setTypes";

const useGetBasket = () => {
  const { session } = useSessionContext();

  const getBasket = async (
    setBasket: SetBasket,
    setBasketFetchError: SetError
  ) => {
    const { data, error } = await supabase
      .from("basketview")
      .select(`*`)
      .eq("client_id", session?.user?.id)
      .ilike("basket_status", BasketStatusValues.OPEN);

    if (error) {
      setBasketFetchError(error);
      setBasket(null);
    }

    if (data) {
      setBasket(data);
      setBasketFetchError(null);
    }
  };

  return { getBasket };
};

export default useGetBasket;
