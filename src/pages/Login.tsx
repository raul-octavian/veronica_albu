import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Button from '../components/navigation/Button';
import TextBoxHeader from '../components/textBox/TextBoxHeader';
import { validateEmail } from '../utils/regex';
import { requiredRes } from '../utils/ValidationResponces';

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <TextBoxHeader>
        <h1 className='text-accent-main text-3xl font-heading'>Logheaza-te</h1>
      </TextBoxHeader>
      <div className=' bg-secondary-main md:w-[80%] p-8 mt-8 '>
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
              className={`p-1 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none w-full ${
                errors.email &&
                `border border-error focus:ring-2 focus:ring-error`
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
          <div className='flex justify-center flex-col items-center '>
            <Button type='submit' value='Logheazate'></Button>
            <Link
              to='/register'
              className='text-accent-main hover:underline tracking-wider'
            >
              {' '}
              Creaza cont
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
