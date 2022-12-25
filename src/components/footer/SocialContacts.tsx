import { FC } from "react";
import Phone from "../../assets/phone.svg";
import Facebook from "../../assets/facebook.svg";
import Insta from "../../assets/insta.svg";
import Mail from "../../assets/mail.svg";
import WhatsApp from "../../assets/whats_App.svg";

const SocialContacts: FC = () => {
  return (
    <div className="pb-8">
      <ul>
        <a href="tel:0040751602026" target="_blank" rel="noreferrer">
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <img src={Phone} alt="phone icon" className="h-full w-full" />
            </div>
            <span className="ml-4">0040751602026</span>
          </li>
        </a>
        <a
          href="mailto:albu.felicia@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <img src={Mail} alt="mail icon" className="h-full w-full" />
            </div>
            <span className="ml-4">albu.felicia@gmail.com</span>
          </li>
        </a>
        <a href="https://wa.me/40751602026" target="_blank" rel="noreferrer">
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <img
                src={WhatsApp}
                alt="whatsapp icon"
                className="h-full w-full"
              />
            </div>{" "}
            <span className="ml-4">0040751602026</span>
          </li>
        </a>
        <a
          href="https://www.instagram.com/veronica_avian/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <img src={Insta} alt="instagram icon" className="h-full w-full" />
            </div>
            <span
              className="ml-4 underline text-clip"
              title="https://www.instagram.com/veronica_avian/ "
            >
              Instagram
            </span>
          </li>
        </a>
        <a
          href="https://www.facebook.com/veronica.albu"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <img
                src={Facebook}
                alt="facebook icon"
                className="h-full w-full"
              />
            </div>
            <span
              className="ml-4 underline"
              title="https://www.facebook.com/veronica.albu"
            >
              Facebook
            </span>
          </li>
        </a>
      </ul>
    </div>
  );
};
export default SocialContacts;
