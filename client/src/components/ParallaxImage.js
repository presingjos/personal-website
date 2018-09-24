import React from 'react'
import './w3.css'
import './ParallaxImage.css'
import 'font-awesome/css/font-awesome.min.css'

class ParallaxImage extends React.Component {
  render () {
    let imageDir = 'http://localhost:5000/images/me.jpg'

    return (
      <div>
        <div className='parallax' style={{backgroundImage: `url('${imageDir}')`}}>
          <div className='w3-display-middle'>
            <div className='w3-animate-opacity border'>
              <h2>Hey, I'm </h2>
              <h1>JOE PRESING</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ParallaxImage
