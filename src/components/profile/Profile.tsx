import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from '../../contexts/sessionContext';
import useGetClientInfo from '../../hooks/query/useGetClientinfo';
import FetchError from '../errors/FetchError';
import TextBoxContainer from '../textBox/TextBoxContainer';
import TextBoxContentWarper from '../textBox/TextBoxContentWarper';
import TextBoxHeader from '../textBox/TextBoxHeader';
import ProfileInfoContainer from './ProfileInfoContainer';
import ProfileInfoItem from './ProfileInfoItem';

type ProfileProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const Profile: FC<ProfileProps> = () => {
  const { error, client } = useGetClientInfo();
  const navigate = useNavigate();

  const { session } = useSessionContext();

  useEffect(() => {
    if (!session.user) {
      navigate('/login');
    }
  }, [navigate, session]);
  if (error) {
    return <FetchError error={error}></FetchError>;
  }

  return (
    <div>
      <TextBoxContainer>
        <TextBoxContentWarper>
          <TextBoxHeader>
            <h2 className='text-2xl text-accent-main '>Profilul meu</h2>
          </TextBoxHeader>
          <ProfileInfoContainer>
            <ProfileInfoItem
              fieldName='first name'
              fieldValue={client?.first_name}
            />
            <ProfileInfoItem
              fieldName='last name'
              fieldValue={client?.last_name}
            />
            <ProfileInfoItem fieldName='email' fieldValue={client?.email} />
            <ProfileInfoItem fieldName='phone' fieldValue={client?.phone} />
          </ProfileInfoContainer>
        </TextBoxContentWarper>
      </TextBoxContainer>
    </div>
  );
};
export default Profile;
