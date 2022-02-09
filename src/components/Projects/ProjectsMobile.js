import './projectsmobile.css';
import upArrow from '../../assets/images/up-arrow.png';
import projects from '../../assets/data/projects.json';
import { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ProjectsMobile(props) {
  const [filteredProjects, setFilteredProjects] = useState([]);

  function goUp() {
    scroll.scrollToTop();
  }

  const categories = new Set(
    projects
      .map((project) => {
        return project.categories;
      })
      .flat()
  );

  return (
    <div className='projects-container-mobile'>
      <button onClick={goUp} className='up-arrow-btn'>
        <img src={upArrow} className='up-arrow' />
      </button>
      <h1>Projects</h1>
      <div className='projects-filter'>
        {Array.from(categories)
          .sort()
          .map((category) => {
            return (
              <div className='category-mobile' key={`${category} button`}>
                {category}
              </div>
            );
          })}
      </div>
      <div className='projects-holder-mobile'>
        {projects.map((project) => {
          return (
            <div className='project-mobile'>
              <h2>{project.title}</h2>
              <img
                className='project-img-mobile'
                src={require(`../../assets/images/${project.img_url}`)}
              />
              <div className='projects-filter'>
                {project.categories.map((category) => {
                  return <div className='category-mobile'>{category}</div>;
                })}
              </div>
              <div className='links-mobile'>
                <a href={project.live_url} target='_blank'>
                  (live)
                </a>
                /
                <a href={project.gh_url} target='_blank'>
                  (repo)
                </a>
              </div>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsMobile;
