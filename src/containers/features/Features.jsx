import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

// HERE I HAVE CREATED AN ARRAY OF OBJECTS CONTAINING THE DATA FOR THE FEATURES TAB

// THIS DATA IS MAPPED BELOW TO BE SHOWN ON THE WEB APP

const featuresData = [
  {
    title: 'Transparency',
    text: 'Because of the decentralized nature of Bitcoin’s blockchain, all transactions can be transparently viewed by either having a personal node or using blockchain explorers that allow anyone to see transactions occurring live.',
  },
  {
    title: 'Is Blockchain Secure?',
    text: 'Blockchain technology achieves decentralized security and trust in several ways. To begin with, new blocks are always stored linearly and chronologically. That is, they are always added to the “end” of the blockchain.',
  },
  {
    title: 'Blockchain in Banking and Finance',
    text: 'Perhaps no industry stands to benefit from integrating blockchain into its business operations more than banking. Financial institutions only operate during business hours, usually five days a week.',
  },
  {
    title: 'Smart Contracts',
    text: 'A smart contract is a computer code that can be built into the blockchain to facilitate, verify, or negotiate a contract agreement. Smart contracts operate under a set of conditions to which users agree. When those conditions are met, the terms of the agreement are automatically carried out.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
