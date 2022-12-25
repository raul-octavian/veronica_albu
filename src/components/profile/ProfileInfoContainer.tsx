import { FC } from "react";

type ProfileInfoContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const ProfileInfoContainer: FC<ProfileInfoContainerProps> = ({ children }) => {
  return <div className="border border-accent-main p-10 m-4 ">{children}</div>;
};
export default ProfileInfoContainer;
