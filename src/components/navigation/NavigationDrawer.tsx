import { FC } from "react";
import ButtonIcon from "./ButtonIcon";
import CloseIcon from "./CloseIcon";
import NavigationList from "./NavigationList";

type NavigationDrawerProps = {
  onClickHandler: (value: React.SetStateAction<boolean>) => void;
  isDrawerOpen?: boolean;
};

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  onClickHandler,
  isDrawerOpen,
}) => {
  return (
    <div
      id="drawer-navigation"
      className={`absolute z-40 top-0 py-14 h-screen bg-secondary-main lg:bg-transparent overflow-y-auto w-full max-w-full transition-all duration-300 font-heading uppercase text-accent-main tracking-[0.15rem] ${
        isDrawerOpen ? "left-0" : "-left-[150%]"
      } `}
      aria-labelledby="drawer-navigation-label"
    >
      <ButtonIcon
        onClickHandler={onClickHandler}
        isDrawerOpen={isDrawerOpen}
        position="absolute"
      >
        <CloseIcon />
      </ButtonIcon>
      <NavigationList onClickHandler={onClickHandler} />
    </div>
  );
};
export default NavigationDrawer;
