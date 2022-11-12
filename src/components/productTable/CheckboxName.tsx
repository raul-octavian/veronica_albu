import { FC } from 'react';

type CheckboxNameProps = {
  serviceName: string;
  id: string;
  onMainChangeHandler: () => void;
};

const CheckboxName: FC<CheckboxNameProps> = ({
  id,
  serviceName,
  onMainChangeHandler,
}) => {
  return (
    <>
      <input
        type='checkbox'
        name={id}
        id={id}
        className='accent-accent-main'
        onChange={() => onMainChangeHandler()}
      />
      <label htmlFor={id} className='text-left ml-1 tracking-wider font-body'>
        {serviceName}
      </label>
    </>
  );
};
export default CheckboxName;
