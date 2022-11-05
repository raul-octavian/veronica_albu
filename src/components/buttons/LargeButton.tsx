import { FC } from 'react';

type LargeButtonProps = {
  value: string;
};

const LargeButton: FC<LargeButtonProps> = ({ value }) => {
  return (
    <div className='w-full md:flex md:justify-center'>
      <button
        className={`text-primary-main bg-accent-main focus:ring-4 focus:ring-accent-soft font-medium text-lg uppercase tracking-widest w-full py-6 focus:outline-none transition-all duration-300 hover:tracking-wide md:w-96`}
        type='button'
      >
        {value}
      </button>
    </div>
  );
};
export default LargeButton;
