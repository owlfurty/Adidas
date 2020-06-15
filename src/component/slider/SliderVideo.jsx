import React, { Component } from 'react';
import Cover from 'react-video-cover';

class SliderVideo extends Component {

  render() {
    return (
      <div className="slider-activation" style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}>
        
        <Cover videoOptions={{autoplay: 'true', src: '/assets/images/hero.mp4'}} />
        
      </div>
    );
  }
}

export default SliderVideo;