import React from 'react'
import Event from './Event'
import './History.css'

class History extends React.Component {

  render () {
    return (
      <div className='history'>
        <h1 className='header'>Here's what I've done so far</h1>
        <Event
          imageURL='https://calm-spire-19547.herokuapp.com/images/pratt.jpg'
          eventName='Pratt & Whitney'
          eventLocation='East Hartford, CT'
          eventPosition='Software Engineer, Since Summer 2016 + 2017'
          eventDescription='After spending one summer internship at Pratt & Whitney, I decided to come back full time. My team works to develop in house software for groups who focus on the high temperature regions of jet engines. I lead the development of an application to improve the durability analysis of all components in these high temperature regions. The application enables traceability on all methodologies run and has shown a 70% increase in analysis time from the previous method. I also play a role in creating a company wide Python package repository using conda and cloud services. Currently, I am working to create a HTML5 based GU with a Python backend, which I intend to rollout to all other projects I am working on.'
          />
        <Event
          imageURL='https://calm-spire-19547.herokuapp.com/images/WPI.JPG'
          eventName='Worcester Polytechnic Institute'
          eventLocation='Worcester, MA'
          eventPosition='B.S. in Mechanical Engineering with a minor in Computer Science,
                         earned May 2017'
          eventDescription='Before going to WPI I felt no sense of direction. WPI provided me with many different routes to discover what my passions were. In my first and second year I discovered computer aided design and spent two internships as a design engineer. In my third year, I was introduced to computer science and spent a half a semester in Thailand where I designed a drainage system for a Bangkok slum. I was humbled by my experience in Thailand through talking and interacting with members of the slum and seeing the struggles that they dealt with day to day. In my last year at WPI, I spent a lot of time working on large projects. My favorites were programming a robot to play jenga and experimenting with different 3D printing patterns and influence on thermal deformation.'
        />
        <Event
          imageURL='https://calm-spire-19547.herokuapp.com/images/ebmpapst.jpeg'
          eventName='ebm-papst'
          eventLocation='Farmington, CT'
          eventPosition='Design Engineer Intern, Summer 2014+2015'
          eventDescription='I spent two internships at ebm-papst as a design engineer. I learned a lot about the design process and the challenges that design engineers face everyday. These internships also taught me how to be a professional and key communication skills that have helped me get to where I am today.'
        />
      </div>
    )
  }
}
export default History