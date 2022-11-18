import { FC } from 'react';
import TextBoxHeader from '../textBox/TextBoxHeader';
const WorkingHours: FC = () => {
  return (
    <div>
      <TextBoxHeader>
        <h3 className='text-left'>Program</h3>
      </TextBoxHeader>
      <div className='flex gap-2 capitalize'>
        <div>Luni-Vineri:</div>
        <div> 09 - 19</div>
      </div>
      <div className='flex gap-2 capitalize'>
        <div>Sambata:</div>
        <div> 09 - 13</div>
      </div>
      <div className='flex gap-2 capitalize'>
        <div>Duminica:</div>
        <div> inchis</div>
      </div>
    </div>
  );
};
export default WorkingHours;
