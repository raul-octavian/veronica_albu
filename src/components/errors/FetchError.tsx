import { PostgrestError } from '@supabase/supabase-js';
import { FC } from 'react';
import TextBoxHeader from '../textBox/TextBoxHeader';

type FetchErrorProps = {
  error?: PostgrestError | null;
};

const FetchError: FC<FetchErrorProps> = ({ error }) => {
  return (
    <TextBoxHeader>
      <h2 className='text-2xl mb-4 text-error'>
        There was an error retrieving retrieving data. Please reload.
      </h2>
      <p>{error?.message}</p>
    </TextBoxHeader>
  );
};
export default FetchError;
