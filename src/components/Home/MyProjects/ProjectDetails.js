import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const { name, img, description, githubLink, LinkLink, features, } = useLoaderData()
    return (
        <div>

        </div>
    );
};

export default ProjectDetails;