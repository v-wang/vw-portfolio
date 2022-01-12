import React from 'react';
import projects from '../assets/data/projects.json';

function Projects(props) {
  return (
    <div className='projects-top-bar'>
      <h2>Projects</h2>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <div className='projects-holder'>
        {projects.map((project) => {
          return (
            <div className='project'>
              <img src='' />
              <div className='project-info'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
