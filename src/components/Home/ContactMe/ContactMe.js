import React, { useRef } from 'react';
import { BsFillCircleFill, BsFillSquareFill } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';


const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_n6rmayj', 'template_slqtjda', form.current, 'Kp9I9PCBCyxLOCqZv')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    toast.success('Your message send Successfully!')
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
                if (error.text) {
                    toast.error('Ooops! Something went wrong. Message Unsend.');
                }
            });
    };

    return (
        <div className='my-20' id='contactme' smooth="true" duration='1000'>
            <div className="divider my-20" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                <div className='flex justify-center items-center text-2xl uppercase'>
                    <BsFillCircleFill className='mr-3 text-[#6D67E4]' />
                    <span className='text-4xl font-bold'>Contact Me</span>
                    <BsFillSquareFill className='ml-3 text-[#6D67E4]' />
                </div>
            </div>
            <section className="py-6 w-full bg-gradient-to-r from-rose-400 to-fuchsia-500">
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x justify-center items-center">
                    <div className="py-6 md:py-0 md:px-6 text-white">
                        <h1 className="text-4xl font-bold">Get in touch</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Chittagong, Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <FaWhatsapp className="w-5 h-5 mr-2 sm:mr-6" />
                                <span>+8801723834826</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>Miskaturrahman34826@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form ref={form}
                        onSubmit={sendEmail}
                        className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1 text-white">Full name</span>
                            <input type="text"
                                name="user_name"
                                placeholder="your name"
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  input input-bordered" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-white">Email address</span>
                            <input type="email"
                                name="user_email"
                                placeholder="youremail@gmail.com"
                                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  input input-bordered" />
                        </label>
                        <label className="block">
                            <span className="mb-1 text-white">Message</span>
                            <textarea
                                rows="3"
                                name="message"
                                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  textarea textarea-bordered h-64" placeholder='your message...'></textarea>
                        </label>
                        <button
                            type='submit'
                            value="Send"
                            className='flex justify-center items-center border-2 rounded-md px-5 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold text-xl'>
                            Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactMe;