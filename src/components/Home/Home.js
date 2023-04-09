import React from 'react';
import About from '../Blog/About/About';
import AdvBanner from './AdvBanner/AdvBanner';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Home.css'
import MyExperience from './MyExperience/MyExperience';
const Home = () => {
    return (
        <>

            <div className="sticky-icon">
                <a
                    href="https://www.instagram.com/miska_rah_man/" className="Instagram"
                    target='_blank'
                    rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                    Instagram </a>

                <a
                    href="https://www.facebook.com/miskatur9"
                    className="Facebook"
                    target='_blank'
                    rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                    Facebook </a>

                <a
                    href="https://github.com/Miskatur"
                    target='_blank'
                    rel="noreferrer"
                    className="Github flex gap-x-5 items-center">
                    <FaGithub className='text-4xl' />
                    Github </a>

                <a
                    href="https://www.linkedin.com/in/miskatur9/"
                    target='_blank'
                    rel="noreferrer"
                    className="LinkedIn flex gap-x-5  items-center">
                    <FaLinkedinIn className='text-3xl ml-2' />
                    LinkedIn </a>

                <a
                    href="https://twitter.com/Miskatur_9"
                    className="Twitter"
                    target='_blank'
                    rel="noreferrer">
                    <i className="fab fa-twitter"> </i>
                    Twitter </a>

            </div>
            <div className='w-11/12 mx-auto '>
                <Banner></Banner>
                <About></About>
                <MyExperience></MyExperience>
                <MySkills></MySkills>
                <AdvBanner></AdvBanner>
                <MyProjects></MyProjects>
                <ContactMe></ContactMe>
            </div>
        </>
    );
};

export default Home;