import { AuthError } from '@supabase/supabase-js';
import { FC, useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PostgrestError } from 'react-supabase';
import Button from '../../components/navigation/Button';
import { useSessionContext } from '../../contexts/sessionContext';
import supabase from '../../supabase';
import { validateEmail } from '../../utils/regex';
import { requiredRes } from '../../utils/ValidationResponces';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [error, setError] = useState<PostgrestError | AuthError>();

  const navigate = useNavigate();
  const location = useLocation();

  const { setSession } = useSessionContext();

  const onSubmit: SubmitHandler<Inputs> = async (inputs: Inputs) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: inputs.email,
      password: inputs.password,
    });

    data?.session && setSession(data?.session);
    error && setError(() => error);
    console.log(location);
    !error && location.pathname === '/login' && navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-4 max-w-[280px] m-auto'
    >
      <div>
        <label htmlFor='email' className='block'>
          Email
        </label>
        <input
          {...register('email', {
            required: requiredRes(),
            pattern: {
              value: validateEmail,
              message: 'introdu a adresa de email valida',
            },
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.email && `border border-error focus:ring-2 focus:ring-error`
          }
                `}
          type='email'
          id='email'
          placeholder='ex: email@email.com'
        />
        {errors.email && (
          <span className='text-error font-body text-xs m-0'>
            {errors.email?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor='password'>Parola</label>
        <input
          {...register('password', {
            required: requiredRes(),
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.password &&
            `border border-error focus:ring-2 focus:ring-error`
          }
                `}
          type='password'
          placeholder='************'
        />
        {errors.password && (
          <span className='text-error font-body text-xs m-0'>
            {errors.password?.message}
          </span>
        )}
      </div>
      <div className='flex justify-center flex-col items-center '>
        <Link
          to='/register'
          className='text-accent-main hover:underline tracking-wider'
        >
          {' '}
          Creaza cont
        </Link>
        <Button type='submit' value='Logheaza-te'></Button>
        <Link
          to='/register'
          className='text-primary-main hover:underline tracking-wider'
        >
          {' '}
          Ai uitat parola?
        </Link>
      </div>
      {error && error.message === 'Invalid login credentials' && (
        <p className='text-error font-body text-sm m-0 text-center'>
          Emailul sau parola nu sunt corecte
        </p>
      )}
    </form>
  );
};
export default LoginForm;
