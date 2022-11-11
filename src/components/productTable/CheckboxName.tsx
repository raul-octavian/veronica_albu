import { FC } from 'react';

type CheckboxNameProps = {
  serviceName: string;
  checked?: boolean;
  id: string;
};

const CheckboxName: FC<CheckboxNameProps> = ({ id, checked, serviceName }) => {
  return (
    <>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='accent-accent-main'
        checked={checked}
      />
      <label htmlFor={id} className='text-left ml-1 tracking-wider font-body'>
        {serviceName}
      </label>
    </>
  );
};
export default CheckboxName;
