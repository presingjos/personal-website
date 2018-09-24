import React from 'react'
import './Event.css'

class Event extends React.Component {

  render () {
    return (
      <div className='event'>
        <div className='container'>
          <div className='image'>
            <img src={this.props.imageURL} alt='Not found'/>
          </div>
        </div>
        <div className='description'>
          <h3>{this.props.eventName}</h3>
          <h5>{this.props.eventLocation}</h5>
          <h4>{this.props.eventPosition}</h4>
          <p>{this.props.eventDescription}</p>
        </div>
      </div>
    )
  }
}

export default Event
