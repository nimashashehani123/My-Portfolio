import React from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from "react-icons/fa";

const Contact: React.FC = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_zguj8en", // replace with your EmailJS service ID
                "template_m2g4dxq", // replace with your EmailJS template ID
                e.currentTarget,
                "ftAHpJ1_kO0H7w2ua" // replace with your EmailJS public key
            )
            .then(() => {
                toast.success("Email sent successfully!");
            })
            .catch(() => {
                toast.error("Failed to send email.");
            });
        e.currentTarget.reset();
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-900 text-white"
        >
            <div className="w-full px-2 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                    Get In Touch
                </h2>

                <div className="grid gap-8 sm:gap-10 lg:gap-12 md:grid-cols-2 items-start">
                    {/* Left - Info + Social */}
                    <div className="flex flex-col justify-center p-6 sm:p-8 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-cyan-400">
                            Let’s Connect
                        </h3>
                        <p className="text-gray-300 mb-6 text-sm sm:text-base">
                            I’m open to new projects, collaborations, or a friendly chat.
                            Reach out through social links or send me a message directly!
                        </p>
                        <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                            <li className="flex items-center gap-3">
                                <FaPhone className="text-cyan-400" />
                                <span>+94 76 216 7697</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-cyan-400" />
                                <span>nimashashehani0715@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-cyan-400" />
                                <span>Panadura, Sri Lanka</span>
                            </li>
                        </ul>
                        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 justify-center md:justify-start">
                            {[
                                { icon: <FaGithub />, link: "https://github.com/username" },
                                { icon: <FaLinkedinIn />, link: "https://linkedin.com/in/username" },
                                { icon: <FaInstagram />, link: "https://instagram.com/username" },
                                { icon: <FaEnvelope />, link: "mailto:nimasha@example.com" },
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="rounded-xl shadow-lg bg-white/10 backdrop-blur-md border border-white/20 flex flex-col justify-start p-6 md:mt-0 w-full max-w-md mx-auto">
                        <form onSubmit={sendEmail} className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your email"
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Write your message..."
                                    required
                                    className="w-full px-3 py-2 rounded-lg bg-black/30 border border-white/20 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 rounded-lg font-semibold bg-cyan-400 hover:bg-cyan-500 text-black transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
