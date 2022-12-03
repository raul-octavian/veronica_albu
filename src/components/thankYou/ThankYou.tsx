import { FC } from 'react';
import { useSessionContext } from '../../contexts/sessionContext';
import { Order } from '../../types/db/dbTypes';

type ThankYouProps = {
  orderInfo: Order[];
};

const ThankYou: FC<ThankYouProps> = ({ orderInfo }) => {
  const { session } = useSessionContext();
  return (
    <div className='p-4'>
      <div className='text-left text-xl w-full p-8 border border-accent-main lg:w-[70%] m-auto'>
        <p className='mb-2 pl-4'>
          Draga <span>{session.user.user_metadata?.first_name}</span>
        </p>
        <p>Iti multumesc pentru comanda facuta.</p>
        <p>
          Conanda ta are numarul: <span>{orderInfo[0].id} </span>{' '}
        </p>
        <p>
          Te voi suna in cel mai scurt timp pentru a stabili impreuna detaliile
          prgramarii tale.
        </p>
        <p className='text-right mt-4 text-accent-main'>Cu drag, Veronica</p>
      </div>
    </div>
  );
};
export default ThankYou;
