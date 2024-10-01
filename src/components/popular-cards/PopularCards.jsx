import React, { useState } from 'react';

import Card3 from '../../assets/images/card3.svg';

import './style.css';

const PopularCards = () => {
  const [btnstate, setBtnState] = useState(0);
  const btnNames = ['Featured', 'Cashback', 'Rewards', 'Fuel', 'Business'];

  const cards = [1, 2, 3];

  return (
    <div className="popular-cards-container">
      <div className="heading-section">
        <img src="/right-vector.svg" alt="RightVector" />
        <div>
          <h1>Popular credit cards for every dedicated category</h1>
          <div className="cards-options">
            {btnNames.map((ele, i) => (
              <button
                className={`btn ${btnstate === i ? 'active' : 'inactive'} `}
                key={i}
                onClick={() => setBtnState(i)}
              >
                {ele}
              </button>
            ))}
          </div>
        </div>
        <img src="/left-vector.svg" alt="LeftVector" />
      </div>
      <div className='offering-cards'>
        {cards.map((c) => (
          <div key={c}>
            <img src={Card3} alt="Card1" />
            <div className="card-details">
              <h4 className="card-name">HDFC Regalia</h4>
              <div className="label-container">
                <label className="card-label">Travel</label>
                <label className="card-label">Online Shopping</label>
              </div>
              <p className="card-offer">50% Cashback</p>
              <p className="card-desc">
                High cashback on online and offline spends
              </p>
              <div className="card-apply">
                <a href="#">Apply Now</a>{' '}
                <img src="/right-arrow.svg" alt="rightArrow" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCards;
