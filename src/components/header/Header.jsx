import React from 'react';
import './style.css';

const Header = () => {
  const links = [
    {
      label: 'OUR PRODUCTS',
      acc: true,
    },
    {
      label: 'Tools',
      acc: true,
    },
    {
      label: 'BLOGS',
      acc: false,
    },
    {
      label: 'ABOUT US',
      acc: false,
    },
  ];
  return (
    <div className="container">
      <img src="/bank-karo.svg" alt="Bank-Karo" />
      <aside>
        <ul className="links">
          {links.map((link, i) => (
            <li key={i}>
              <a href="#" className='link'>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <div className='sign-in-container'>
      <button className='btn'>
        Sign In
      </button>
      <div className='img-continer'>
      <img src="/sign-in.svg" alt="SignIn" />
      </div>
      </div>
    </div>
  );
};

export default Header;
