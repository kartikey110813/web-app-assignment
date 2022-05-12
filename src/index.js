import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

// HERE I AM RENDERING THE APP COMPONENT INSIDE THE DIV WITH THE ID ROOT AND ALL THE ITEMS WILL COME UNDER THIS DIV

ReactDOM.render(<App />, document.getElementById('root'));
