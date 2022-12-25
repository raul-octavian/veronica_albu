import { FC } from "react";
import Facebook from "../icons/Facebook";
import Insta from "../icons/Insta";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
import WhatsApp from "../icons/WhatsApp";

const SocialContacts: FC = () => {
  return (
    <div className="pb-8">
      <ul>
        <a href="tel:0040751602026" target="_blank" rel="noreferrer">
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <Phone />
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
              <Mail />
            </div>
            <span className="ml-4">albu.felicia@gmail.com</span>
          </li>
        </a>
        <a href="https://wa.me/40751602026" target="_blank" rel="noreferrer">
          <li className="flex py-4 items-center">
            <div className="h-8 w-8">
              <WhatsApp />
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
              <Insta />
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
              <Facebook />
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
