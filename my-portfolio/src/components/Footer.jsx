import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="container bg-gray-400 p-7 px-10 text-black">
            <div className="inline-flex gap-6 text-3xl">
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faInstagram} />
            </div> 
            <div className="flex justify-end font-semibold text-base text-center">
                &copy;2023 iGraziella. All Rights Reserved
            </div>
        </footer>
    );
}