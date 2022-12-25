import { FC } from "react";

type TestimonialCardProps = {
  children: JSX.Element | JSX.Element[];
};

const TestimonialCard: FC<TestimonialCardProps> = ({ children }) => {
  return (
    <div className="my-10 md:min-w-[350px] md:max-w-[400px]">
      <div className=" mx-auto bg-secondary-main text-primary-main">
        {children}
      </div>
    </div>
  );
};
export default TestimonialCard;
