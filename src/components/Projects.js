import React from 'react';
import projects from '../assets/data/projects.json';

function Projects(props) {
  return (
    <div className='projects-area'>
      <div className='projects-top-bar'>
        <h2>Projects</h2>
        <ul>
          <li>
            <button>1</button>
          </li>
          <li>
            <button>2</button>
          </li>
        </ul>
      </div>
      <div className='projects-holder'>
        {projects.map((project) => {
          return (
            <div className='project'>
              <img src={require(`../assets/images/${project.img_url}`)} />
              <div className='project-info'>
                <h3>
                  {project.title}{' '}
                  <a href={project.live_url} target='_blank'>
                    (live)
                  </a>
                  /
                  <a href={project.gh_url} target='_blank'>
                    (repo)
                  </a>
                </h3>
                <div className='project-categories'>
                  {project.categories.map((category) => {
                    return <div className='category'>{category}</div>;
                  })}
                </div>
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
