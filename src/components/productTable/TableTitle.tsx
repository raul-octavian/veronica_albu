import { FC } from 'react';
import TextBoxHeader from '../textBox/TextBoxHeader';

type TableTitleProps = {
  title: string;
};

const TableTitle: FC<TableTitleProps> = ({ title }) => {
  return (
    <TextBoxHeader>
      <h2 className='text-accent-main text-2xl font-heading p-4 capitalize'>
        {' '}
        {title}
      </h2>
    </TextBoxHeader>
  );
};
export default TableTitle;
