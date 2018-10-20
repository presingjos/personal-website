import React from 'react'
import './Event.css'

export default ({
  imageURL,
  eventName,
  eventLocation,
  eventPosition,
  eventDescription
}) =>
  <div className='event'>
    <div className='container'>
      <div className='image'>
        <img src={imageURL} alt='Not found'/>
      </div>
    </div>
    <div className='description'>
      <h3>{eventName}</h3>
      <h5>{eventLocation}</h5>
      <h4>{eventPosition}</h4>
      <p>{eventDescription}</p>
    </div>
  </div>