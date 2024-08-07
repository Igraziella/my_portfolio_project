import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="container bg-gray-400 p-7 px-10 text-black min-w-full">
      <div className="flex justify-center items-center flex-col">
        <div className="flex gap-6 text-3xl">
          <a href="https://github.com/Igraziella">
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-[#374151]"
            />
          </a>
          <a href="https://twitter.com/ObialorGraziel2">
            <FontAwesomeIcon
              icon={faXTwitter}
              className="hover:text-[#374151]"
            />
          </a>
          <a href="https://www.linkedin.com/in/ijeoma-obialor-012494114/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-[#374151]"
            />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-[#374151]"
            />
          </a>
        </div>
        <div className="font-semibold text-base">
          &copy;2023 iGraziella. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
