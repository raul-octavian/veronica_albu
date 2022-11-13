import { FC } from 'react';

type CheckboxNameProps = {
  serviceName: string;
  id: string;
  onMainChangeHandler: () => void;
  checked?: boolean;
};

const CheckboxName: FC<CheckboxNameProps> = ({
  id,
  serviceName,
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
        {serviceName}
      </label>
    </div>
  );
};
export default CheckboxName;
