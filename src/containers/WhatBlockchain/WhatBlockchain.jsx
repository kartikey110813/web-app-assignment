import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatBlockchain.css';

const WhatBlockchain = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is bitcoin" text="The Bitcoin protocol is built on a blockchain. In a research paper introducing the digital currency, Bitcoin’s pseudonymous creator, Satoshi Nakamoto, referred to it as “a new electronic cash system that’s fully peer-to-peer, with no trusted third party." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>

    {/* This is section in which i have used the feature component containing all the details. */}

    <div className="gpt3__whatgpt3-container">
      <Feature title="Privacy" text="Bitcoin can be as private as the user wishes. All Bitcoin is traceable but it is impossible to establish who has ownership of Bitcoin if it was purchased anonymously. If Bitcoin is purchased on a KYC exchange then the Bitcoin is directly tied to the holder of the KYC exchange account." />
      <Feature title="Security" text="The larger the Bitcoin network grows the more secure it gets. The level of security a Bitcoin holder has with their own Bitcoin is entirely up to them. For this reason it is recommended that people use cold storage for larger quantities of Bitcoin or any amount that is intended to be held for a long period of time." />
      <Feature title="Transaction Speed" text="Bitcoin transactions can take as little as 15 minutes and as much as over an hour depending on network congestion." />
    </div>
  </div>
);

export default WhatBlockchain;
