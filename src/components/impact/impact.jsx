import React from 'react';

import RataTataSpinner from '../../assets/videos/ratan_tata_spinner.mp4';

import './style.css';

const Impact = () => {
  return (
    <div className="golden-video-container">
      <video autoPlay loop muted className="golden-video-bg">
        <source src={RataTataSpinner} type="video/mp4" />
      </video>
      <div className="content">
        <p>Lorem ipsum dolor sit.</p>
        <h1>Lorem ipsum dolor, sit amet .</h1>
        <div>
          <img src="/ratan-tata.png" alt="" className='RatanSirImg' />
        </div>
        {/* <div className='CardsContainer'>
        <img src="/center-cards.svg" alt="" /></div> */}
      </div>
    </div>
  );
};

export default Impact;
