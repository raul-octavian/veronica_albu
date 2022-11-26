import { FC } from 'react';
import TextBoxWithCtaAndImage from '../textBox/TextBoxWithCtaAndImage';
const Intro: FC = () => {
  return (
    <TextBoxWithCtaAndImage>
      <p className='text-lg text-center mb-2 tracking-wide'>
        Bine ai venit Placeholder,
      </p>
      <p className='tracking-wider xl:w-[60%] m-auto mb-2'>
        Aici iti poti programa serviciile de infrumusetare, te rog sa alegi un
        serviciu din lista de mai jos, pentru unele dintre ele o sa poti alege
        si servicii secundare compatibile.
      </p>
      <p className='tracking-wider xl:w-[60%] m-auto'>
        Poti alege mai mult de un serviciu principal cu servicii secundare, dar
        doar daca sunt servicii compatibile intre ele, spre exemplu manichiura
        cu gel si cea simple nu sunt compatibile pretru ca se exclud reciproc
      </p>
    </TextBoxWithCtaAndImage>
  );
};
export default Intro;
