import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    const menuItems = <>
        <Link to={'#home'}><li className='btn btn-ghost flex justify-center items-center lg:text-white text-lg'>Home</li></Link>
        <Link to={'#myskills'}><li className='btn btn-ghost flex justify-center items-center lg:text-white text-lg'>My Skills</li></Link>

        <Link to={'#myprojects'}><li className='btn btn-ghost flex justify-center items-center lg:text-white text-lg'>Projects</li></Link>

        <Link to={'#contactme'}><li className='btn btn-ghost flex justify-center items-center lg:text-white text-lg'>Contact Me</li></Link>

        <Link to={'/blog'}><li className='btn btn-ghost flex justify-center items-center lg:text-white text-lg'>Blog</li></Link>
        {/* <a href="https://drive.google.com/file/d/1EsNU4MNQg1x3fKf6U-r4y1iU2eaEBPhy/view?usp=sharing" target='_blank' rel="noreferrer" className='flex justify-center items-center'>

            <button className="btn btn-outline rounded-xl">Download</button>

        </a> */}

    </>
    return (
        <div className=''>
            <div className={`navbar bg-gradient-to-r from-rose-400 to-fuchsia-500 lg:px-20 top-0 fixed z-10 bg-opacity-30`}>
                <Link to={'/'} className='flex justify-center items-center btn btn-ghost'>
                    <img src={logo} alt="" className=' h-14 w-full' />
                </Link>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                        <ul tabIndex={1} className={`menu menu-compact dropdown-content  p-2 shadow rounded-box w-52 bg-base-100 `}>
                            {menuItems}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden md:flex ml-auto">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>


            </div>
        </div>
        // <header className="p-4 bg-base-100">
        //     <div className="container flex justify-between h-16 mx-auto">
        //         <Link to={'/'}>
        //             <img src={logo} alt="" className=' h-14 w-full' />
        //         </Link>
        //         <div className="dropdown">
        //             <label tabIndex={0} className="btn btn-ghost md:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        //                 </svg>
        //             </label>
        //             <ul tabIndex={1} className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 `}>
        //                 {menuItems}
        //             </ul>
        //         </div>
        //         <button className="flex justify-end p-4 md:hidden">

        //         </button>
        //     </div>
        // </header>
    );
};

export default Navbar;