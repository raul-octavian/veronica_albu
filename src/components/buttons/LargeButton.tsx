import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type LargeButtonProps = {
  value?: string;
  link?: string;
  disabled?: boolean;
  disableValue?: string;
};

const LargeButton: FC<LargeButtonProps> = ({
  value,
  link,
  disabled,
  disableValue,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    link ? navigate(`${link}`) : navigate('/programare');
  };
  if (value) {
    return (
      <div className='w-full md:flex md:justify-center'>
        <button
          className={`disabled:bg-accent-soft disabled:text-primary-main disabled:hover:tracking-widest text-primary-main bg-accent-main focus:ring-4 focus:ring-accent-soft font-medium text-lg uppercase tracking-widest w-full py-6 focus:outline-none transition-all duration-300 hover:tracking-wide md:w-96`}
          type='button'
          onClick={() => {
            onClick();
          }}
          disabled={disabled}
        >
          {disabled ? disableValue : value}
        </button>
      </div>
    );
  }
  return null;
};
export default LargeButton;
