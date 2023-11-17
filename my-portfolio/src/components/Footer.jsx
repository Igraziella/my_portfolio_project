import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="container bg-gray-400 p-11 text-black">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
                &copy;2023 iGraziella. All Rights Reserved
            </div>
        </footer>
    );
}