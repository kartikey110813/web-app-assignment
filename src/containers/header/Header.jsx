import React from 'react';
import './header.css';

// HEADER COMPONENT CONTAINIG THE TEXT AND THE IMAGE ON THE RIGHT SIDE

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Learn Something amazing about What Is a Blockchain?</h1>
      <p>A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

    </div>

    <div className="gpt3__header-image">
      <img style={{ borderRadius: '50%' }} src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" />
    </div>
  </div>
);

export default Header;
