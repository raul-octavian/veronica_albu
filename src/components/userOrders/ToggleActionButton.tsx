import { FC } from 'react';

type ToggleActionButtonProps = {
  value: string;
  onClickHandler?: () => void;
};

const ToggleActionButton: FC<ToggleActionButtonProps> = ({
  value,
  onClickHandler,
}) => {
  return (
    <p
      className='text-accent-main cursor-pointer underline underline-offset-3 py-2 px-6 tracking-widest focus:ring-4 focus:ring-accent-soft'
      onClick={onClickHandler}
    >
      {value}
    </p>
  );
};
export default ToggleActionButton;
