import { FC, useEffect, useState } from 'react';
import { BasketService } from '../../types/service';
import LargeButton from '../buttons/LargeButton';
import CheckboxName from '../productTable/CheckboxName';
import PriceOrDurationBox, {
  TypeValues,
} from '../productTable/PriceOrDurationBox';
import ProductItem, { UseTypeValues } from '../productTable/ProductItem';
import TableHeader from '../productTable/TableHeader';

const mockBasket: BasketService[] = [
  {
    id: '001',
    name: 'manichiura simpla',
    duration: 90,
    price: 150,
    category: 'manichiura',
    type: 1,
    extras: ['003'],
    compatible: ['004'],
  },
  {
    id: '003',
    name: 'masaj degete',
    duration: 15,
    price: 30,
    category: 'manichiura',
    type: 2,
    extras: [],
    addedFor: '001',
  },
  {
    id: '002',
    name: 'manichiura cu gel',
    duration: 120,
    price: 250,
    category: 'manichiura',
    type: 1,
    extras: ['003'],
    compatible: ['004'],
  },
  {
    id: '004',
    name: 'pedichiura',
    duration: 120,
    price: 250,
    category: 'pedichiura',
    type: 1,
    extras: ['003'],
  },
];

const Basket: FC = () => {
  const [basket, setBasket] = useState(mockBasket);

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

  useEffect(() => {
    const getTotalDuration = basket.reduce((acc, curr) => {
      if (typeof curr.duration !== 'number') {
        return -curr.duration;
      }
      return acc + curr.duration;
    }, 0);
    const getTotalPrice = basket.reduce((acc, curr) => {
      if (typeof curr.price !== 'number') {
        return -curr.price;
      }
      return acc + curr.price;
    }, 0);
    setTotalPrice(getTotalPrice);
    setTotalDuration(getTotalDuration);
  }, [basket]);

  return (
    <>
      <div className='p-4 lg:w-[70%] m-auto'>
        <TableHeader></TableHeader>
        <div className='border border-accent-main'>
          <div className='p-4 pb-0 my-2 '>
            <div>
              {basket.map(({ name, duration, price, id, type }) => (
                <ProductItem
                  name={name}
                  duration={duration ?? 0}
                  price={price ?? 0}
                  id={id}
                  use={type === 1 ? UseTypeValues.MAIN : UseTypeValues.SECOND}
                  onMainChangeHandler={() => null}
                  checked={true}
                  key={id}
                />
              ))}
            </div>
            <div className=' border-t border-accent-main mt-8 py-4'>
              <div>
                <CheckboxName
                  name='am luat la  cunostiata ca durata totala este o estimare a timpului necesar fiecari preceduri si poate suferii modificari.'
                  id='Dis_time'
                  onMainChangeHandler={() => onChangeHandler(setTimeDisclaimer)}
                />
              </div>

              <div>
                <CheckboxName
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
          </div>
          <LargeButton
            value='Finalizeaza comanda'
            disabled={getDisclainers()}
            disableValue='accepta conditiile de mai sus'
          />
        </div>
      </div>
    </>
  );
};
export default Basket;
