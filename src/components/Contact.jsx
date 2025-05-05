import React, { useRef } from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import TitleHeader from './TitleHeader';
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm( 'service_soslj55','template_ae0tn8d', form.current, {
            publicKey: 'GnxDm1GPkTI3B4KNd',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };
    return (
        <div id="contact" className="w-full flex flex-col items-center mt-20 md:mt-40 section-padding xl:px-0">
            <div className="w-full max-w-4xl px-2 md:px-10">
                <TitleHeader
                    title="Get in Touch – Let’s Connect"
                    sub="💬 Have questions or ideas? Let’s talk! 🚀"
                />
                <div className="mt-16 flex justify-center">
                    <div className="w-full md:w-2/3 bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl p-5">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="w-full flex flex-col gap-7"
                        >
                            <div>
                                <label htmlFor="name" className="text-white block mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="What’s your good name?"
                                    required
                                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-white block mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="What’s your email address?"
                                    required
                                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-white block mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows="5"
                                    required
                                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none"
                                />
                            </div>

                            <button type="submit" className="mt-5">
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text">Send Message</p>
                                    <div className="arrow-wrapper">
                                        <img src="/images/arrow-down.svg" alt="arrow" />
                                    </div>
                                </div>
                            </button>
                        </form>
                        <div className='mt-10 flex justify-center gap-8'>
                        <FaGithub className="text-3xl text-white hover:text-gray-400 hover:scale-125 cursor-pointer transition duration-300" />
                        <FaLinkedin className="text-3xl text-white hover:text-gray-400 hover:scale-125 cursor-pointer transition duration-300" />  
                        <FaTelegramPlane className="text-3xl text-white hover:text-gray-400 transition hover:scale-125 cursor-pointer duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
