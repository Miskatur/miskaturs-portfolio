import React, { useEffect, useState } from 'react';
import { BsFillCircleFill, BsFillSquareFill } from 'react-icons/bs';
import { FaCheckCircle, FaGithub, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyProjects = () => {

    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects);
    return (
        <div className='my-20' id='myprojects' smooth="true" duration='1000'>
            <div className="divider" data-aos="fade-up"
                duration='500'>
                <div className='flex justify-center items-center text-2xl uppercase'>
                    <BsFillCircleFill className='mr-3 text-[#6D67E4]' />
                    <span className='text-4xl font-bold'>My Projects</span>
                    <BsFillSquareFill className='ml-3 text-[#6D67E4]' />
                </div>
            </div>

            <div className='grid lg:grid-cols-2 lg:gap-10 lg:my-20' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" duration='500'>
                {
                    projects.map(project =>
                        <div key={project.id} class="group relative w-full ">
                            <img className="w-full object-cover h-96 shadow-xl rounded-md border-2 rounded-tl-3xl rounded-br-3xl  border-[#1A9CEA] outline-2 outline-blue-500/50"
                                src={project.front} alt="" />
                            <div
                                class="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-end items-center bg-gray-100 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500">
                                <h1 class="text-2xl font-bold text-black">{project.name}</h1>
                                <h1 class="text-xl font-semibold text-black">{project.description}</h1>

                                <div>
                                    <div className='flex justify-center items-center gap-4'>
                                        <a href={project.githubLink} target={'_blank'} rel="noreferrer"><button className='btn flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500  text-white mt-3 hover:scale-110 duration-500'> <FaGithub className='mr-2' /> Github</button></a>

                                        <a href={project.liveLink} target={'_blank'} rel="noreferrer"><button className='btn bg-gradient-to-r from-rose-400 to-fuchsia-500 mt-3 flex justify-center items-center text-white hover:scale-110 duration-500'><FaLink className='mr-2' /> Live Link</button></a></div>
                                </div>
                                <div className='my-5'>
                                    <p className='font-semibold text-lg '>Tools I use : </p>
                                    <ul>{
                                        (project.technologies).map((f, i) =>
                                            <li key={i} className="flex justify-start items-center"><FaCheckCircle /> {f}</li>
                                        )
                                    }
                                    </ul>
                                </div>
                                <Link to={`/project/${project.id}`} className="w-full"><button className='btn bg-gradient-to-r from-sky-500 to-indigo-500 w-full text-white font-semibold rounded-br-3xl'><Link>See Details</Link></button></Link>
                            </div>
                        </div>)

                }

            </div>
        </div >
    );
};

export default MyProjects;