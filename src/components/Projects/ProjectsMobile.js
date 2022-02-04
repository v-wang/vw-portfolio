import './projectsmobile.css';
import projects from '../../assets/data/projects.json';
import { useState } from 'react';

function ProjectsMobile(props) {
  const [filteredProjects, setFilteredProjects] = useState([]);

  const categories = new Set(
    projects
      .map((project) => {
        return project.categories;
      })
      .flat()
  );

  return (
    <div className='projects-container'>
      <h1>Project</h1>
      <div className='projects-filter'>
        {Array.from(categories)
          .sort()
          .map((category) => {
            return (
              <div className='category' key={`${category} button`}>
                {category}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectsMobile;
