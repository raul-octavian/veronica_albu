import { FC } from 'react';
import TextBoxHeader from '../textBox/TextBoxHeader';
const TableTitle: FC = () => {
  return (
    <TextBoxHeader>
      <h2 className='text-accent-main text-2xl font-heading p-4 capitalize'>
        {' '}
        lista de servicii
      </h2>
    </TextBoxHeader>
  );
};
export default TableTitle;
