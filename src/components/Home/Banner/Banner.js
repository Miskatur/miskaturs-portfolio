import React from 'react';
import banner from '../../assets/profile.png'
import { MdWavingHand } from "react-icons/md";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";

const Banner = () => {

    return (
        <div className='grid lg:grid-cols-2 my-20' id='home' smooth="true" duration='1000'>
            <div className='flex justify-center items-center my-20' data-aos="fade-right" data-aos-duration="1000">
                <div >
                    <div>
                        <h1 className='flex justify-center items-center text-4xl '> Hey Folks! <MdWavingHand className='text-yellow-400 ml-3'></MdWavingHand></h1>
                        <h2 className='lg:text-4xl text-xl my-5 text-center'>It's
                            <span className='text-[#6D67E4] text-xl lg:text-5xl font-semibold'> Miskatur Rahman </span>
                        </h2>
                    </div >
                    <div>
                        <h3 className='lg:text-3xl text-sm text-center mt-5'>I'm a  <span className='text-[#CA5EF5] font-bold capitalize' >
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Front-end Developer', 'MERN Stack Developer', 'ReactJS Developer', 'Back-end Developer']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                        </h3>
                    </div>
                    <div className='my-10 flex justify-center items-center'>
                        <Link to={'/#contactme'}>
                            <button className='flex justify-center items-center border-2 rounded-t-md rounded-tl-3xl rounded-r-md rounded-b-md px-5 hover:scale-110 duration-500 py-3  bg-gradient-to-r from-violet-500 to-purple-400 text-white font-bold text-xl mr-5'><GrContactInfo className='mr-3 ' /> Contact Me</button>
                        </Link>

                        <a href="https://drive.google.com/file/d/1EsNU4MNQg1x3fKf6U-r4y1iU2eaEBPhy/view?usp=sharing" target='_blank' rel="noreferrer" className='flex justify-center items-center'>
                            <button className='flex justify-center items-center border-2 rounded-t-md rounded-l-md rounded-br-3xl rounded-b-md px-5 hover:scale-110 duration-500 py-3  bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-[#d1c7d4] text-white font-bold text-xl'><FaDownload className='mr-3' /> My Resume</button>
                        </a>
                    </div>
                    <div className='mt-5 text-2xl text-center'>
                        <span className='border-b-4 border-b-indigo-500 px-1'> Find Me On </span>
                        <div className='flex justify-center items-center mt-5'>
                            <a href="https://www.facebook.com/miskatur9" target='_blank' rel='noreferrer'><FaFacebook className='mr-5 text-3xl text-blue-600 hover:scale-150 duration-500' /></a>
                            <a href="https://www.linkedin.com/in/miskatur9/" target='_blank' rel='noreferrer'><FaLinkedin className='mr-5 text-3xl text-blue-700 hover:scale-150 duration-500' /></a>
                            <a href="https://github.com/miskatur" target='_blank' rel='noreferrer'><FaGithub className=' text-3xl text-black hover:scale-150 duration-500' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                <img src={banner} alt="miskatur rahman banner" />
            </div>

        </div>
    );
};

export default Banner;