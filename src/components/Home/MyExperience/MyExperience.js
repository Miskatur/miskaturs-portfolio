import React from 'react';
import { BsFillCircleFill, BsFillSquareFill } from 'react-icons/bs';

const MyExperience = () => {
    return (
        <div className='my-20' id='myExperience' smooth="true" duration='1000'>
            <div className="divider" data-aos="fade-up"
                duration='500'>
                <div className='flex justify-center items-center text-2xl uppercase'>
                    <BsFillCircleFill className='mr-3 text-[#6D67E4]' />
                    <span className='text-4xl font-bold'>My Experience</span>
                    <BsFillSquareFill className='ml-3 text-[#6D67E4]' />
                </div>
            </div>


            <div className="container my-10" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                <div className="flex flex-col md:grid grid-cols-12 text-gray-50">

                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-gradient-to-r from-sky-500 to-indigo-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-bold text-xl mb-1">Full Stack Web Developer</h3>
                            <h4 className="font-semibold text-lg italic mb-1">
                                - Thinky Storm
                            </h4>
                            <h4 className="font-semibold text-md  mb-1">
                                Dhaka, Bangladesh
                            </h4>
                            <p className="leading-tight text-justify w-full">
                                01 January, 2023 - Present*
                            </p>
                        </div>
                    </div>

                    <div className="flex md:contents">
                        <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-gradient-to-r from-sky-500 to-indigo-500 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 shadow text-center">
                                <i className="fas fa-check-circle text-white"></i>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                            <h3 className="font-bold text-xl mb-1">Frontend React JS Developer </h3>
                            <h4 className="font-semibold text-lg italic mb-1">
                                - Rework AI (Formerly Known as Hubnex Inc)
                            </h4>
                            <h4 className="font-semibold text-md mb-1">
                                Gurugram, Haryana, India
                            </h4>
                            <p className="leading-tight text-justify w-full">
                                01 January, 2023 - 01, April, 2023
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default MyExperience;