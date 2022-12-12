import React from 'react';
import About from '../Blog/About/About';
import Banner from './Banner/Banner';
import ContactMe from './ContactMe/ContactMe';
import MyProjects from './MyProjects/MyProjects';
import MySkills from './MySkills/MySkills';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <About></About>
            <MySkills></MySkills>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;