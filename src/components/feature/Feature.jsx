import React from 'react';
import './feature.css';

// THIS IS THE FEATURE COMPONENT WHICH IS GETTING PROPS AS TITLE AND TEXT FROM THE CONTAINER FEATURES
// THIS DISPLAYS THE EACH FEATURE

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
