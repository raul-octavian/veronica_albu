import { FC } from 'react';

type ProfileInfoItemProps = {
  children?: React.ReactNode | React.ReactNode[];
  fieldName?: string;
  fieldValue?: string;
};

const ProfileInfoItem: FC<ProfileInfoItemProps> = ({
  fieldName,
  fieldValue,
}) => {
  return (
    <div className='flex flex-row justify-start items-center text-lg mb-2'>
      <p className='mr-4 uppercase text-accent-main'>{fieldName} :</p>
      <p> {fieldValue}</p>
    </div>
  );
};
export default ProfileInfoItem;
