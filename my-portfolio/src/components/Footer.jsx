import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="container bg-gray-400 p-7 px-10 text-black">
            <div className="inline-flex gap-6 text-3xl">
                <a href="https://github.com/Igraziella">
                    <FontAwesomeIcon icon={faGithub} className="hover:text-yellow-800"/>
                </a>
                <a href="https://twitter.com/ObialorGraziel2">
                    <FontAwesomeIcon icon={faTwitter} className="hover:text-yellow-800"/>
                </a>
                <a href="https://www.linkedin.com/in/ijeoma-obialor-012494114/">
                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-yellow-800"/>
                </a>
                <a href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} className="hover:text-yellow-800"/>
                </a>
            </div> 
            <div className="flex justify-end font-semibold text-base text-center">
                &copy;2023 iGraziella. All Rights Reserved
            </div>
        </footer>
    );
}