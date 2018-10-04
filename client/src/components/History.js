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
          eventDescription='At Pratt & Whitney, I am apart of team that combines computer science and mechanical engineering together. This combination is one of the many reasons I returned to Pratt & Whitney full time. My team creates analysis software specifically for the high temperature regions of the jet engine. I lead the development of an application to standardize and revise the previous durability analysis process of all components in high temperature regions. The application enables plug and play analysis methodologies and has shown a 70% decrease in analysis time. I am also working on implementing a company wide Python distribution via Conda and cloud services. Lastly, I am introducing a desktop application that uses HTML5 as the user interface and Python for all the business logic. This will allow my team to easily create cross platform applications, utilize the convenience of Python, and expand outsourcing of user interfaces to web developers.'
          />
        <Event
          imageURL='https://calm-spire-19547.herokuapp.com/images/WPI.JPG'
          eventName='Worcester Polytechnic Institute'
          eventLocation='Worcester, MA'
          eventPosition='B.S. in Mechanical Engineering with a minor in Computer Science,
                         earned May 2017'
          eventDescription='WPI provided me with many different opportunities to discover and develop my passions for design and engineering. In my first and second year I discovered computer aided design and spent two internships as a design engineer. This taught me the difference between simply designing something and creating a robust, manufacturable design. In my third year, I was introduced to computer science and spent half a semester in Thailand where I aided in writing a interactive map application to identify drain blockages in a Bangkok slum. That year I spent the summer working at Pratt & Whitney on a particle simulation application, which taught me the importance of code optimization and documentation. In my last year at WPI, I got to work on many exciting projects including programming a robot to play jenga and experimenting with 3D printing and the influence on thermal deformation. WPI allowed me to make lifelong connections, taught me how I learn best, and pointed me to a career path that I know I will love.'
        />
        <Event
          imageURL='https://calm-spire-19547.herokuapp.com/images/ebmpapst.jpeg'
          eventName='ebm-papst'
          eventLocation='Farmington, CT'
          eventPosition='Design Engineer Intern, Summer 2014+2015'
          eventDescription='I spent two internships at ebm-papst as a design engineer. At ebm-papst, I learned how to create production level designs with Creo Parametric 5.0. I designed tooling fixtures to air flow testing rigs and aided in the design process of many products. I gained critical communication and teamwork skills from all the connections that I made during my time at ebm-papst.'
        />
      </div>
    )
  }
}
export default History