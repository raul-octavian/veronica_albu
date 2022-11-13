import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../../components/navigation/Button';

import {
  onlyLetter,
  validateEmail,
  validatePassword,
  validatePhone,
} from '../../utils/regex';
import { requiredRes } from '../../utils/ValidationResponces';

type Inputs = {
  name: string;
  phone: string;
  email: string;
  password: string;
  repassword: string;
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

  const basePassword = watch('password');

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-2 max-w-[280px] m-auto'
    >
      <div>
        <label htmlFor='name' className='block'>
          Nume
        </label>
        <input
          {...register('name', {
            required: requiredRes(),
            pattern: {
              value: onlyLetter,
              message: 'foloseste doar litere si spatii',
            },
          })}
          className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
            errors.name && `border border-error focus:ring-2 focus:ring-error `
          }
                `}
          type='name'
          id='name'
          placeholder='ex: Jane Doe'
        />
        {errors.name && (
          <span className='text-error font-body text-xs m-0'>
            {errors.name?.message}
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
          className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
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
          className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
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
          className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
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
        <label htmlFor='repassword'>Confirma parola</label>
        <input
          {...register('repassword', {
            required: requiredRes(),
            validate: (value) =>
              value === basePassword || 'Passwords do not match',
          })}
          className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
            errors.repassword &&
            `border border-error focus:ring-2 focus:ring-error`
          }
                `}
          name='repassword'
          type='password'
          placeholder='************'
        />
        {errors.repassword && (
          <span className='text-error font-body text-xs m-0'>
            {errors.repassword?.message}
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
