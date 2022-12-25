import { FC } from "react";
import Button from "../navigation/Button";
const ContactForm: FC = () => {
  return (
    <form action="" className="flex flex-col gap-4">
      <input
        className="p-2 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none"
        name="name"
        type="text"
        placeholder="ex: numele meu"
      />
      <input
        className="p-2 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none"
        name="email"
        type="email"
        placeholder="ex: mailulmeu@gmail.com"
      />
      <input
        className="p-2 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none"
        name="phone"
        type="text"
        placeholder="ex: 0040 1234567"
      />
      <textarea
        className="p-2 bg-primary-main text-secondary-main placeholder:text-secondary-soft rounded-md focus:ring-4 focus:ring-accent-soft focus:outline-none h-36"
        name="message"
        defaultValue="mesajul meu aici"
      ></textarea>
      <div className="flex justify-end">
        <Button value="Trimite"></Button>
      </div>
    </form>
  );
};
export default ContactForm;
