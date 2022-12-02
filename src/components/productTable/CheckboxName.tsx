import { FC } from 'react';
import useAddServiceToBasket from '../../hooks/query/useAddServiceToBasket';
import useGetBasket from '../../hooks/query/useGetBasket';

type CheckboxNameProps = {
  name: string;
  id: string;
  onMainChangeHandler: () => void;
  checked?: boolean;
};

const CheckboxName: FC<CheckboxNameProps> = ({
  id,
  name,
  onMainChangeHandler,
  checked,
}) => {
  const { addServiceToBasket } = useAddServiceToBasket();
  const { basket } = useGetBasket();

  const onClickHandler = () => {
    if (!checked) {
      basket
        ? addServiceToBasket(basket[0]?.basket_id ?? '', id)
        : addServiceToBasket('', id);
    } else {
    }
  };
  return (
    <div className='flex justify-start align-middle gap-2'>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='accent-accent-main'
        onChange={() => onMainChangeHandler()}
        defaultChecked={checked}
        onClick={onClickHandler}
        data-test='checkbox'
      />
      <label htmlFor={id} className='text-left tracking-wider font-body'>
        {name}
      </label>
    </div>
  );
};
export default CheckboxName;
