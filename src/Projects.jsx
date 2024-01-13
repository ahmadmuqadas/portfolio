import React from 'react'

const Projects = ({url, projectName}) => {
  return (
    <div className='projects-wrapper'>
      <h2 className='projects-header'>PROJECTS</h2>
      <div className="first-project">
        <div className="webaite-show">
          <iframe src={url} className='frame' frameborder="0"></iframe>
        </div>
        <div className="website-description">
          <h4>{projectName}</h4>
          <h5>Technology Used:</h5>
          <ul>
            <li>React</li>
            <li>React Router V6</li>
            <li>Firebase</li>
            <li>Framer Motion</li>
          </ul>
          <h5>Feautures:</h5>
          <ul>
            <li>Mobile First Responsive Web Design</li>
            <li>Firebase Real Time Database</li>
            <li>Firebase Authentication</li>
            <li>Admin To Add/Delete Menus</li>
            <li>React Router Loader and Action Features</li>
          </ul>
        <div className="description-btns">
        <button>View</button>
          <button>Code</button>
        </div>
        </div>
      </div>
</div>



  )
}

export default Projects


