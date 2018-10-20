import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Projects.css'

const Project = ({
  title,
  imageURL,
  paragraph,
  githubLink,
  herokuLink
}) => {
  const herokuButton = herokuLink
    ? <div className='float'>
        <button className='heroku-button'>
          <a href={herokuLink}>
            <img
              src="https://calm-spire-19547.herokuapp.com/images/heroku.png"
              alt="Not found"
            />
          </a>
        </button>
      </div>
    : null
  const githubButton = <div className='float'>
      <button className='github-button'>
        <a href={githubLink}>
          <i className='fa fa-github fa-3x'/>
        </a>
      </button>
    </div>
  return (
    <div className='project'>
      <div className='container'>
        <div className='image'>
          <img src={imageURL} alt="Not Found"/>
        </div>
      </div>
      <div className='description'>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {githubButton}
        {herokuButton}
      </div>
    </div>
  )
}

export default ({ projects }) =>
  <div className="projects">
    <h1 className="header">
      What I've been up to
    </h1>
    {projects.map((project) =>
      <Project
        title={project.name}
        imageURL={project.image}
        paragraph={project.description}
        githubLink={project.github}
        herokuLink={project.heroku}
      />
    )}
  </div>
