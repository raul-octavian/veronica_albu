import { FC } from "react";
import LogoWithText from "../icons/LogoWithText";
const Logo: FC = () => {
  return (
    <div className="items-center flex-1 shrink-1 flex flex-col justify-center bg-gradient-radial from-secondary-main via-secondary-main to-transparent">
      <div className="flex justify-center items-center max-w-[80%]">
        <LogoWithText />
      </div>
      <div className="font-extraThin text-center">
        <h2 className="text-accent-main font-body font-extraThin text-center font-thin">
          Phy-academy certified artist
        </h2>
      </div>
    </div>
  );
};
export default Logo;
