import React, { useEffect, useState } from 'react';

const useProjects = () => {
    const [projects, setProjects] = useState([])
    console.log(projects)
   useEffect( () => {
    fetch('./projectsData.json')
    .then(res => res.json())
    .then(data => setProjects(data))
   }, [])
    return {
        projects
    }
};

export default useProjects;