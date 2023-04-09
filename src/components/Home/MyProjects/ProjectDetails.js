import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams()
    const [project, setProjects] = useState({})
    const { name, img, description, githubLink, LinkLink, features, } = project

    useEffect(() => {
        fetch(`project.json/${id}`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])

    return (
        <div>
            <h1 className='text-6xl text-black'>Hello</h1>
        </div>
    );
};

export default ProjectDetails;