import React from 'react';

import { Footer, Blog, Possibility, Features, WhatBlockchain, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

/* HERE I AM USING THE COMPONENTS OF ALL THE RESPECTIVE ELEMENTS IN THE WEB APP.
 WRITING THE CODE IN SEPARATE COMPONENTS REDUCE THE AMBIGUITY ON ONE PAGE */

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatBlockchain />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
