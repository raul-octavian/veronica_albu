import { FC } from "react";

import MainDiamond from "../../assets/main_diamond.jpg";

type DrawerBackdropProps = {
  onClickHandler: (value: React.SetStateAction<boolean>) => void;
  isDrawerOpen?: boolean;
};

const DrawerBackdrop: FC<DrawerBackdropProps> = ({
  onClickHandler,
  isDrawerOpen,
}) => {
  return (
    <div
      id="drawer-navigation"
      className={`hidden lg:block md:absolute z-30 top-0 py-14 h-screen overflow-y-auto bg-secondary-main w-full max-w-full transition-all duration-300 font-heading uppercase text-accent-main tracking-[0.15rem] ${
        isDrawerOpen ? "right-0" : "-right-[150%]"
      } `}
      aria-labelledby="drawer-navigation-label"
      onClick={() => onClickHandler(false)}
    >
      <div className=" overflow-y-auto w-full h-full bg-secondary-main">
        <img
          src={MainDiamond}
          alt="nail art"
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default DrawerBackdrop;
