import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Connect.css'

export default ({ linkedin }) =>
  <div className='connect'>
    <h1 className='header'>Let's get connected </h1>
    <h4><a className='text' href={linkedin}>LinkedIn</a> messages work best.</h4>
    <div className='button-div'>
      <button className='linkedin-button'>
        <a href={linkedin}>
          <i className='fa fa-linkedin-square fa-3x'/>
        </a>
      </button>
    </div>
  </div>

