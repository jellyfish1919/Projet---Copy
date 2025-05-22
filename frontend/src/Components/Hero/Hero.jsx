import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/photos - Copy/hand_icon.png';
import arrow_icon from '../Assets/photos - Copy/arrow.jpeg';
import hero_imge from '../Assets/photos - Copy/hero_img.jpeg';

const Hero = () => {
  return (
    <div className='hero'>
      {/* Left Section */}
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
          <p>New</p>
          <img src={hand_icon} alt="Hand Icon" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>

        {/* Button */}
        <button className='hero-latest-btn'>
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Arrow Icon" />
        </button>
      </div>

      {/* Right Section */}
      <div className='hero-right'>
        <img src={hero_imge} alt="Hero" />
      </div>
    </div>
  );
};



export default Hero
