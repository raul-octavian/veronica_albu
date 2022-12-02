import { FC } from 'react';
import { useBasketContext } from '../../contexts/basketContext';
import useAddServiceToBasket from '../../hooks/query/useAddServiceToBasket';
import useDeleteServiceFromBasket from '../../hooks/query/useDeleteServiceFromBasket';
import useGetBasketId from '../../hooks/query/useGetBasketId';

import { ComponentNames } from '../../types/constants/componentNames';
import { BasketView } from '../../types/db/dbTypes';

type CheckboxNameProps = {
  name: string;
  id: string;
  onMainChangeHandler: () => void;
  checked?: boolean;
  location?: ComponentNames;
};

const CheckboxName: FC<CheckboxNameProps> = ({
  id,
  name,
  onMainChangeHandler,
  checked,
  location,
}) => {
  const { addServiceToBasket, error } = useAddServiceToBasket();
  const { basket } = useBasketContext();
  const { useBasketId } = useGetBasketId();
  const { deleteServiceFromBasket } = useDeleteServiceFromBasket();

  const useOnClickHandler = async () => {
    const basketId = await useBasketId();
    if (!checked) {
      basketId
        ? addServiceToBasket(basketId ?? '', id)
        : addServiceToBasket('', id);
    } else {
      location === ComponentNames.BASKET &&
        basket?.length &&
        basket[0].basket_id &&
        deleteServiceFromBasket(basket[0].basket_id, id);
    }
  };

  const isProductInBasket = (basket: BasketView[] | null, id: string) => {
    return !!basket?.find((item) => item.service_id === id);
  };

  return (
    <>
      <div className='flex justify-start align-middle gap-2'>
        <input
          type='checkbox'
          name={id}
          id={id}
          className='accent-accent-main'
          onChange={() => onMainChangeHandler()}
          defaultChecked={isProductInBasket(basket, id)}
          onClick={useOnClickHandler}
          data-test='checkbox'
          disabled={
            location === ComponentNames.PRODUCT_LIST &&
            isProductInBasket(basket, id)
          }
        />
        <label htmlFor={id} className='text-left tracking-wider font-body'>
          {name}
        </label>
      </div>

      {error && <p className='text-sm text-error'>{error}</p>}
      {location === ComponentNames.PRODUCT_LIST &&
        isProductInBasket(basket, id) && (
          <p className='text-sm text-accent-soft'> Produsul este deja in cos</p>
        )}
    </>
  );
};
export default CheckboxName;
