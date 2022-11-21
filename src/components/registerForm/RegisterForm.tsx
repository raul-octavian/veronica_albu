import { AuthError, PostgrestError } from '@supabase/supabase-js';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/navigation/Button';
import supabase from '../../supabase';

import {
  onlyLetter,
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../utils/regex';
import { requiredRes } from '../../utils/ValidationResponces';

type Inputs = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  rePassword: string;
};

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onTouched',
  });

  const navigate = useNavigate();

  const [error, setError] = useState<PostgrestError | AuthError>();

  const basePassword = watch('password');

  const signUpWithPassword = async (input: Inputs) => {
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
      options: {
        data: {
          first_name: input.firstName,
          last_name: input.lastName,
          phone: input.phone,
        },
      },
    });

    error && setError(error);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signUpWithPassword(data);
    !error && navigate('/login');
  };

  if (error) {
    return (
      <p>Ups, a aparut o eroare la crearea contului. Te rog mai incearca.</p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 max-w-[280px] m-auto'
    >
      <div>
        <label htmlFor='firstName' className='block'>
          Prenume
        </label>
        <input
          {...register('firstName', {
            required: requiredRes(),
            pattern: {
              value: onlyLetter,
              message: 'foloseste doar litere si spatii',
            },
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.firstName &&
            `border border-error focus:ring-2 focus:ring-error `
          }
                `}
          type='text'
          id='firstName'
          placeholder='ex: Jane Doe'
        />
        {errors.firstName && (
          <span className='text-error font-body text-xs m-0'>
            {errors.firstName?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor='lastName' className='block'>
          Nume
        </label>
        <input
          {...register('lastName', {
            required: requiredRes(),
            pattern: {
              value: onlyLetter,
              message: 'foloseste doar litere si spatii',
            },
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.lastName &&
            `border border-error focus:ring-2 focus:ring-error `
          }
                `}
          type='text'
          id='lastName'
          placeholder='ex: Jane Doe'
        />
        {errors.lastName && (
          <span className='text-error font-body text-xs m-0'>
            {errors.lastName?.message}
          </span>
        )}
      </div>
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
        <label htmlFor='phone' className='block'>
          Telefon
        </label>
        <input
          {...register('phone', {
            required: requiredRes(),
            pattern: {
              value: validatePhone,
              message: 'numarul de telefon poate contine doar numere',
            },
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.phone && `border border-error focus:ring-2 focus:ring-error`
          }
                `}
          type='phone'
          id='phone'
          placeholder='ex: 0740 123456'
        />
        {errors.phone && (
          <span className='text-error font-body text-xs m-0'>
            {errors.phone?.message}
          </span>
        )}
      </div>
      <div>
        <label htmlFor='password'>Parola</label>
        <input
          {...register('password', {
            required: requiredRes(),
            pattern: {
              value: validatePassword,
              message:
                'parola trebuie sa contina minim 8 caractere, o majscula, un numar si un caracter special ',
            },
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
      <div>
        <label htmlFor='rePassword'>Confirma parola</label>
        <input
          {...register('rePassword', {
            required: requiredRes(),
            validate: (value) =>
              value === basePassword || 'Parolele nu sunt indentice',
          })}
          className={`p-2 text-primary-main bg-secondary-main placeholder:text-accent-soft border border-accent-main focus:ring-4 focus:ring-accent-soft focus:outline-none w-full text-xl ${
            errors.rePassword &&
            `border border-error focus:ring-2 focus:ring-error`
          }
                `}
          name='rePassword'
          type='password'
          placeholder='************'
        />
        {errors.rePassword && (
          <span className='text-error font-body text-xs m-0'>
            {errors.rePassword?.message}
          </span>
        )}
      </div>
      <div className='flex justify-center flex-col items-center '>
        <Link
          to='/login'
          className='text-accent-main hover:underline tracking-wider'
        >
          {' '}
          Ai deja cont? Logheaza-te
        </Link>
        <Button type='submit' value='Creaza cont'></Button>
      </div>
    </form>
  );
};
export default RegisterForm;
