import React from 'react';
import { BsFillCircleFill, BsFillSquareFill } from 'react-icons/bs';
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <div className='my-20'>
            <div className="divider my-20" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                <div className='flex justify-center items-center text-2xl uppercase'>
                    <BsFillCircleFill className='mr-3 text-[#6D67E4]' />
                    <span className='text-4xl font-bold'>Who Am I?</span>
                    <BsFillSquareFill className='ml-3 text-[#6D67E4]' />
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-5' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                <div className="avatar flex justify-center" >
                    <div className="w-64 lg:w-96 rounded-full border-b-8 border-indigo-400">
                        <img src={about} alt="" className='' />
                    </div>
                </div>
                <div className='flex justify-start'>
                    <div className='' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom" duration='500'>
                        <h2 className='text-2xl lg:text-4xl font-semibold'>I am <span className='text-indigo-500 font-bold'>Miskatur Rahman</span>
                        </h2>
                        <p className='text-md font-semibold'>From <span className='font-bold text-sky-500'>Chittagong, Bangladesh</span></p>
                        <p className='text-xl font-semibold lg:pr-20'>A passionate Frontend developer skilled in HTML, CSS, Javascript, ReactJS, and CSS Frameworks. I am also comfortable with Backend frameworks and database collection. I am currently doing my Bachelor's Degree in a reputed university in Bangladesh.
                        </p>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" duration='500'>
                                <h3 className='text-2xl font-bold text-violet-500 border-b-4 border-sky-500 inline-block px-2 my-5'>Favourite Pastime</h3>
                                <p className='border-l-4 font-semibold border-violet-700 my-2 p-2 '>Watching Club Football Matches
                                </p>

                                <p className='border-l-4 font-semibold border-rose-700 my-2 p-2'> Exploring New Programming language on Youtube and Google
                                </p>
                                <p className='border-l-4 font-semibold border-violet-700 my-2 p-2'> Hanging Out With Friends.
                                </p>
                            </div>
                            <div data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" duration='500'>
                                <h3 className='text-2xl font-bold text-violet-500 border-b-4 border-sky-500 inline-block px-2 my-5'>Current Aim In Life</h3>


                                <p className='border-l-4 font-semibold border-violet-700 my-2 p-2 '>Learn Few More Programming Languages
                                </p>

                                <p className='border-l-4 font-semibold border-rose-700 my-2 p-2'> Visiting Kashmir, India and Hunza Valley, Pakistan
                                </p>
                                <p className='border-l-4 font-semibold border-violet-700 my-2 p-2'> Performing Hajj With Parents
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;