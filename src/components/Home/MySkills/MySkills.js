import React, { useEffect, useState } from 'react';
import { BsFillCircleFill, BsFillSquareFill } from "react-icons/bs";

const MySkills = () => {
    const [skills, setSkills] = useState([])
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch(`skills.json`)
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    useEffect(() => {
        fetch(`tools.json`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div className='my-20' id='myskills' smooth="true" duration='1000'>
            <div className="divider" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                <div className='flex justify-center items-center text-2xl uppercase'>
                    <BsFillCircleFill className='mr-3 text-[#6D67E4]' />
                    <span className='text-4xl font-bold'>My Skills</span>
                    <BsFillSquareFill className='ml-3 text-[#6D67E4]' />
                </div>
            </div>

            <div className='lg:w-9/12 mx-auto mt-10'>
                <h3 className='text-2xl border-b-4 border-violet-800 inline-block px-2 font-bold'>My Expertise Skills</h3>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-8 mb-16 gap-5 text-center lg:w-9/12 mx-auto' data-aos="fade-up" duration='1500'>
                {
                    skills.map((e, i) =>
                        <div key={i} className=" py-3 px-4  flex justify-center items-center bg-base-100 border-2 shadow-lg  shadow-[#a3b6cd] bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white font-bold hover:scale-110 duration-500  rounded-tl-3xl rounded-br-3xl">
                            <img src={e.image} alt="Shoes" className='mr-2 w-16 rounded-full' />
                            <p className='font-bold text-lg'>{e.name}</p>
                        </div>
                    )
                }
            </div>
            {/* tools */}
            <div className='lg:w-9/12 mx-auto mt-10'>
                <h3 className='text-2xl border-b-4 border-violet-800 inline-block px-2 font-bold'>Tools I Use</h3>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-8 mb-16 gap-5 text-center lg:w-9/12 mx-auto' data-aos="fade-up" duration='1500'>
                {
                    tools.map((e, i) =>
                        <div key={i} className=" py-3 px-4  flex justify-center items-center bg-base-100 border-2 shadow-lg  shadow-[#a3b6cd] bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold hover:scale-110 duration-500  rounded-tl-3xl rounded-br-3xl">
                            <img src={e.image} alt="Shoes" className='mr-2 w-16 rounded-full' />
                            <p className='font-bold text-lg'>{e.name}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default MySkills;