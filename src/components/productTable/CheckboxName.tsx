import { FC } from 'react';

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
  return (
    <div className='flex justify-start align-middle gap-2'>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='accent-accent-main'
        onChange={() => onMainChangeHandler()}
        defaultChecked={checked}
      />
      <label htmlFor={id} className='text-left tracking-wider font-body'>
        {name}
      </label>
    </div>
  );
};
export default CheckboxName;
