import React from 'react'
import Event from './Event'
import './History.css'

export default ({ experiences }) =>
  <div className='history'>
    <h1 className='header'>
      Here's what I've done so far
    </h1>
    {experiences.map((experience) =>
      <Event
        key={experience.name}
        imageURL={experience.image}
        eventName={experience.name}
        eventLocation={experience.location}
        eventPosition={experience.position}
        eventDescription={experience.description}
      />
    )}
  </div>