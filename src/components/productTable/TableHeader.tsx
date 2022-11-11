import { FC } from 'react';
import TextBoxHeader from '../textBox/TextBoxHeader';
const TableHeader: FC = () => {
  return (
    <div className='grid grid-flow-row-dense grid-cols-12 bg-accent-main text-primary-main py-4'>
      <div className='col-span-6'>
        <TextBoxHeader>
          <h4 className='uppercase text-xs text-left pl-4'>Nume</h4>
        </TextBoxHeader>
      </div>
      <div className='col-span-3'>
        <TextBoxHeader>
          <h4 className='uppercase text-xs'>Durata(min)</h4>
        </TextBoxHeader>
      </div>
      <div className='col-span-3'>
        <TextBoxHeader>
          <h4 className='uppercase text-xs'>Pret(RON)</h4>
        </TextBoxHeader>
      </div>
    </div>
  );
};
export default TableHeader;
