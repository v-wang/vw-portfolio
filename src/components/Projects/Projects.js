import React from 'react';
import { useState } from 'react';
import projects from '../../assets/data/projects.json';

function Projects(props) {
  const [pageStart, setPageStart] = useState(1);
  const [pageCount, setPageCount] = useState(3);

  function paginate(projects) {
    return projects.slice((pageStart - 1) * pageCount, pageStart * pageCount);
  }

  paginate(projects);

  return (
    <div className='projects-area'>
      <div className='projects-top-bar'>
        <h2>Projects</h2>
        <ul>
          <li>
            <button
              onClick={(ev) => {
                setPageStart(ev.target.textContent);
              }}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={(ev) => {
                setPageStart(ev.target.textContent);
              }}
            >
              2
            </button>
          </li>
        </ul>
      </div>
      <div className='projects-holder'>
        {paginate(projects).map((project) => {
          return (
            <div className='project'>
              <img
                className={project.mobile ? 'mobile-shot' : null}
                src={require(`../../assets/images/${project.img_url}`)}
              />
              <div className='project-info'>
                <h3>{project.title}</h3>
                <a href={project.live_url} target='_blank'>
                  (live)
                </a>
                /
                <a href={project.gh_url} target='_blank'>
                  (repo)
                </a>
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
