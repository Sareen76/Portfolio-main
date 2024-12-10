import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [isSuccess, setIsSuccess] = useState(false);

    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_5ec10w6', 'template_agtstmi', form.current, {
                publicKey: 'HpORz5-q5FA8mnvMO',
            })
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    setIsSuccess(true); // Set success message state
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSuccess(false); // Set failure message state
                }
            );
    };

    return (
        <div className="Contact w-full flex flex-col items-center">
            <h1 className="text-center mb-2 font-bold text-3xl">Contact Me</h1>

            <form ref={form} onSubmit={sendEmail} className="ContactFields flex lg:w-3/4 sm:w-full p-8 flex-wrap items-center justify-center">
                <div className="input w-full flex gap-2 mb-3 md:flex-row sm:flex-col">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="lg:w-1/2 sm:w-full md:w-1/2 p-3 text-black focus:outline-none focus:ring-0"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="lg:w-1/2 sm:w-full md:w-1/2 p-3 text-black focus:outline-none focus:ring-0"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full h-[35vh] p-3 text-black focus:outline-none focus:ring-0 resize-none"
                />
                <button type="submit" className="btn bg-blue-500 p-2 pl-5 pr-5 rounded-lg mt-5">
                    Send
                </button>
            </form>

            {/* {isSuccess !== null && (
                <div className={`mt-4 ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                    {isSuccess ? 'Message sent successfully!' : 'Failed to send message.'}
                </div>
            )} */}
        </div>
    );
}

export default Contact;
