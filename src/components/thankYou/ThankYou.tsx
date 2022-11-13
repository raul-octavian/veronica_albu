import { FC } from 'react';
const ThankYou: FC = () => {
  return (
    <div className='p-4'>
      <div className='text-left text-xl w-full p-8 border border-accent-main lg:w-[70%] m-auto'>
        <p className='mb-2 pl-4'>
          Draga <span>Placeholder name,</span>
        </p>
        <p>Iti multumesc pentru comanda facuta.</p>
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
