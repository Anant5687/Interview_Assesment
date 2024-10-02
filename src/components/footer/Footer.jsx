import React from 'react';

import './style.css';

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="text-container">
        <div className="social-medai-links">
          <img src="/instagram.svg" alt="InstaSvg" />
          <img src="/twitter.svg" alt="TwitterSvg" />
        </div>
        <p className="footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          architecto obcaecati atque quaerat sapiente aliquam minus esse
          repellat ducimus at.
        </p>

        <div className="social-medai-links">
          <img src="/app-store.svg" alt="AppStoreSvg" />
          <img src="/play-store.svg" alt="PlayStoreSvg" />
        </div>
        <hr />
        <p className="footer-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          incidunt unde neque necessitatibus vero! Ipsa exercitationem hic
          labore dolorem quia.
        </p>
      </div>
      <div className="links-section">
        <div>
          <header>COMPANY</header>
          <ul>
            <li>
              <a href="#">About BankKaro</a>
            </li>
            <li>
              <a href="#">Vision BankKaro</a>
            </li>
            <li>
              <a href="#">Our Team Members</a>
            </li>
            <li>
              <a href="#">Partners & Investors</a>
            </li>
          </ul>
        </div>
        <div>
          <header>BLOGS</header>
          <ul>
            <li>
              <a href="#">BankKaro Savings</a>
            </li>
            <li>
              <a href="#">Cashless Makes Perfect</a>
            </li>
            <li>
              <a href="#">BankKaro No Interest</a>
            </li>
            <li>
              <a href="#">BankKaro Digital Wallet</a>
            </li>
          </ul>
        </div>
        <div>
          <header>FEATURES</header>
          <ul>
            <li>
              <a href="#">Card Genius</a>
            </li>
            <li>
              <a href="#">Lounge Finder</a>
            </li>
            <li>
              <a href="#">Beat My Card</a>
            </li>
            <li>
              <a href="#">Compare Cards</a>
            </li>
          </ul>
        </div>
        <div>
          <header>CONTACT</header>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
          </ul>
        </div>
        <div>
          <header>LEGAL</header>
          <ul>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div>
          <label>© 2024 Bankaro Powered by Pouring Pounds</label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
