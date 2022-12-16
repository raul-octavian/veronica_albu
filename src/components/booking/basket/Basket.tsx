import { PostgrestError } from '@supabase/supabase-js';
import { FC, useEffect, useState } from 'react';
import { useBasketContext } from '../../../contexts/basketContext';
import { ComponentNames } from '../../../types/constants/componentNames';
import { Order } from '../../../types/db/dbTypes';
import { CreateOrder } from '../../../types/order';
import LargeButton from '../../buttons/LargeButton';
import FetchError from '../../errors/FetchError';
import Disclaimer from '../productTable/Disclaimer';
import PriceOrDurationBox, {
  TypeValues,
} from '../productTable/PriceOrDurationBox';
import ProductItem, { UseTypeValues } from '../productTable/ProductItem';
import TableHeader from '../productTable/TableHeader';
import TextBoxHeader from '../../textBox/TextBoxHeader';

type BasketProps = {
  orderInfo?: Order[];
  createOrder: CreateOrder;
  orderError?: PostgrestError | null;
};

const Basket: FC<BasketProps> = ({ orderInfo, createOrder, orderError }) => {
  const [totalDuration, setTotalDuration] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [priceDisclaimer, setPriceDisclaimer] = useState(false);
  const [timeDisclaimer, setTimeDisclaimer] = useState(false);

  const onChangeHandler = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState((state: boolean) => !state);
  };

  const getDisclainers = () => !priceDisclaimer || !timeDisclaimer;

  const { basket, basketFetchError } = useBasketContext();

  useEffect(() => {
    const getTotalDuration = basket?.reduce((acc, curr) => {
      if (curr && curr?.duration) {
        return acc + curr?.duration;
      }
      return acc;
    }, 0);
    const getTotalPrice = basket?.reduce((acc, curr) => {
      if (curr && curr?.price) {
        return acc + curr?.price;
      }
      return acc;
    }, 0);

    setTotalPrice(getTotalPrice ?? 0);
    setTotalDuration(getTotalDuration ?? 0);
  }, [basket]);

  const onClickHandler = () => {
    basket &&
      basket[0].basket_id &&
      createOrder(basket[0].basket_id, totalPrice, totalDuration);
  };

  return (
    <>
      <div className='p-4 lg:w-[70%] m-auto'>
        <TableHeader></TableHeader>
        <div className='border border-accent-main'>
          <div className='p-4 pb-0 my-2 '>
            <div>
              {basketFetchError && (
                <FetchError error={basketFetchError}></FetchError>
              )}
              {!basket?.length && (
                <TextBoxHeader>
                  <p className='text-primary-main text-center'>
                    Nu ai produse in cos
                  </p>
                </TextBoxHeader>
              )}
            </div>

            {!!basket?.length && (
              <>
                <div>
                  {basket.map(
                    ({ name, duration, price, service_id, type }, index) => (
                      <ProductItem
                        name={name ?? ''}
                        duration={duration ?? 0}
                        price={price ?? 0}
                        id={service_id ?? ''}
                        use={
                          type === 1 ? UseTypeValues.MAIN : UseTypeValues.SECOND
                        }
                        onMainChangeHandler={() => null}
                        checked={false}
                        key={service_id}
                        location={ComponentNames.BASKET}
                      />
                    )
                  )}
                </div>
                <div className=' border-t border-accent-main mt-8 py-4'>
                  <div>
                    <Disclaimer
                      name='am luat la  cunostiata ca durata totala este o estimare a timpului necesar fiecari proceduri si poate suferii modificari.'
                      id='Dis_time'
                      onMainChangeHandler={() =>
                        onChangeHandler(setTimeDisclaimer)
                      }
                    />
                  </div>

                  <div>
                    <Disclaimer
                      name='am luat la  cunostiata ca pretul este pentru procedurile selectate si orice proceduri adaugate la fata locului pot influenta pretul final.'
                      id='Dis_price'
                      onMainChangeHandler={() =>
                        onChangeHandler(setPriceDisclaimer)
                      }
                    />
                  </div>
                </div>
                <div className='grid grid-flow-row-dense grid-cols-12 auto-rows-max border-y border-accent-main mb-8'>
                  <div className='col-span-6'>Total</div>
                  <PriceOrDurationBox
                    type={TypeValues.TOTAL_DURATION}
                    value={totalDuration}
                    use={UseTypeValues.MAIN}
                  />
                  <PriceOrDurationBox
                    type={TypeValues.PRICE}
                    value={totalPrice}
                    use={UseTypeValues.MAIN}
                  />
                </div>
              </>
            )}
          </div>

          {!!basket?.length && (
            <LargeButton
              value='Finalizeaza comanda'
              disabled={getDisclainers()}
              disableValue='accepta conditiile de mai sus'
              onClickHandler={onClickHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default Basket;
