import React from 'react';

import CardsSvg from '../../assets/images/cards.svg';
import PercentageSvg from '../../assets/images/percent.svg';
import ShieldSvg from '../../assets/images/shield.svg';
import ChartSvg from '../../assets/images/chart.svg';

import './style.css';

const HeroSection = () => {
  const Offers = [
    {
      img: ChartSvg,
      heading: 'Personalised Offers',
      desc: 'Find best Credit Cards based on your spend pattern',
    },
    {
      img: PercentageSvg,
      heading: 'Earn Rewards',
      desc: 'Earn Rewards for every successful Credit Card approval',
    },
    {
      img: CardsSvg,
      heading: 'Compare Cards',
      desc: 'Compare your existing Cards with best in the industry',
    },
    {
      img: ShieldSvg,
      heading: 'Max Benifits',
      desc: 'Get maximum benefits from your Credit Cards',
    },
  ];

  return (
    <div style={{position:'relative'}}>
      <div className="hero-container">
        <div className="right-cont">
          <h1 className="hero-heading">
            We find the Best Credit Cards for You
          </h1>
          <button className="hero-btn">Find a credit card</button>
        </div>
        <div className="left-cont">
          <img src="/card.png" alt="CARD" />
        </div>
      </div>
      <div className="offer-section">
        {Offers.map((ele, i) => (
          <div key={i} className="offer-card">
            <img
              src={ele.img}
              alt=""
              style={{ width: '200px', height: '200px' }}
            />
            <h3>{ele.heading}</h3>
            <p>{ele.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
