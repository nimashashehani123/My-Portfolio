import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const contacts = [
    { icon: <FaGithub />, link: "https://github.com/username" },
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/username" },
    { icon: <FaInstagram />, link: "https://instagram.com/username" },
    { icon: <FaEnvelope />, link: "mailto:youremail@example.com" },
];

const Contact: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 bg-gray-500 text-white">
            <h2 className="text-4xl mb-4">Contact</h2>
            <div className="flex gap-8 text-3xl">
                {contacts.map((c, idx) => (
                    <a
                        key={idx}
                        href={c.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition"
                    >
                        {c.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
