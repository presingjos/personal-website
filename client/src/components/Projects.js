import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Projects.css'

const project = (title,
                 imageURL,
                 paragraph,
                 githubLink,
                 herokuLink) => {
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


class Projects extends React.Component {

  render () {
    let p1 = 'A simple ReactJS, ExpressJS, and NodeJS web application for real time communication using SocketIO. The web application is hosted on Heroku linked below!  Just click the ‘Start Chatting’ button, enter a nickname, and join a chatroom! I hope to add MongoDB in the future to improve the application.'
    let p2 = 'A way to create user interfaces in HTML5 but with a python backend. A python server is set up and serves the HTML5 front end displayed in a webview. The client and the server communicate with each other using web sockets. I prefer to use this approach over a python based UI kit (wxPython, TkInter, …) because the UI will look the same on any platform and I can do all the heavy lifting in Python (my language of choice). See the source code for an example.'

    return (
      <div className='projects'>
        <h1 className='header'>
          What I've been up to
        </h1>
        {project('Chat Application',
                 'https://calm-spire-19547.herokuapp.com/images/react.png',
                 p1,
                 'https://github.com/presingjos/chat-example',
                 'https://nameless-river-14287.herokuapp.com/')}
        {project('HTML5 GUI with Python Backend',
                 'https://calm-spire-19547.herokuapp.com/images/html5+python.png',
                 p2,
                 'https://github.com/presingjos/py-gui-kit')}
      </div>
    )
  }
}
export default Projects