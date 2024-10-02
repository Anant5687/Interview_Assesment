import React from 'react'
import CardKunadliSvg from '../../assets/images/card-kunadli.svg';
import CompareCardSvg from '../../assets/images/compare-card.svg';
import MyCreditSvg from '../../assets/images/my-credit.svg';

import './style.css'

const Facilities = () => {

    const Facilities = [CardKunadliSvg, CompareCardSvg, MyCreditSvg];
  return (
    <div className='facilities'>{Facilities.map((ele, i)=> <img src={ele} alt={ele} key={i} className='facilities-img' /> )}</div>
  )
}

export default Facilities