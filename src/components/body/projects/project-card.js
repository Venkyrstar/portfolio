import React from 'react'
import './project-card.css'

function ProjectCard({project}) {
  return (
    <div className='project-card'>
      <div className='project-info'>
        <label className='project-title'>{project.title}</label>
        <div className='project-links'>
          {project.link && (
            <a className="project-link" href={project.link}>
              <div className='link-button'>
                <i class="devicon-github-original colored"></i>GitHub
              </div>
            </a>
          )}
        </div>
        <div className='project-desc'>
          <p>{project.description}</p>
        </div>
      </div>
      <div className='project-tags'>
        {project.tags.map((tag) => {
          return (
            <label className='tag'>{tag}</label>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard
