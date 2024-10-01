import React from 'react';

import GoldenPodiumVideo from '../../assets/videos/golden_podium.mp4'

import './style.css'

const CompareCards = () => {
  return (

    <div className="golden-video-container">
    <video autoPlay loop muted className="golden-video-bg">
      <source src={GoldenPodiumVideo} type="video/mp4" />
    </video>
      <div className="content">
        <h1>Compare Cards</h1>
        <div>
        <img src="/center-cards-bg.svg" alt="" /></div>
        <div className='CardsContainer'>
        <img src="/center-cards.svg" alt="" /></div>
      </div>
  </div>
  );
};

export default CompareCards;
