import RegisterForm from '../components/registerForm/RegisterForm';
import TextBoxHeader from '../components/textBox/TextBoxHeader';

const Register = () => {
  return (
    <div className='h-screen flex justify-start items-center flex-col pt-12 sm:justify-center'>
      <TextBoxHeader>
        <h1 className='text-accent-main text-3xl font-heading'>Creaza cont</h1>
      </TextBoxHeader>
      <div className=' bg-secondary-main md:w-[80%] p-4 mt-4 '>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
