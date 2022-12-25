import LoginForm from "../components/login/LoginForm";
import TextBoxHeader from "../components/textBox/TextBoxHeader";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <TextBoxHeader>
        <h1 className="text-accent-main text-3xl font-heading">Logheaza-te</h1>
      </TextBoxHeader>
      <div className=" bg-secondary-main md:w-[80%] p-8 mt-8 ">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
