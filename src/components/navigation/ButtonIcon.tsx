import { FC } from 'react';

type ButtonIconProps = {
  onClickHandler: (value: React.SetStateAction<boolean>) => void;
  isDrawerOpen?: boolean;
  children?: JSX.Element | JSX.Element[];
  variant?: string;
  position?: string;
};

const ButtonIcon: FC<ButtonIconProps> = ({
  onClickHandler,
  isDrawerOpen,
  variant,
  children,
  position,
}) => {
  const textColor =
    variant === 'accent' ? 'text-accent-main' : 'text-primary-main';
  const buttonPosition = position === 'absolute' ? 'absolute top-2 left-2' : '';
  return (
    <button
      className={`${textColor} bg-transparent focus:ring-4 focus:ring-accent-soft font-medium rounded-lg text-sm p-2 m-2 ${buttonPosition} focus:outline-none`}
      type='button'
      data-drawer-target='drawer-navigation'
      data-drawer-show='drawer-navigation'
      aria-controls='drawer-navigation'
      onClick={() => onClickHandler(!isDrawerOpen)}
    >
      {children}
    </button>
  );
};
export default ButtonIcon;
