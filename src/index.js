import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Routes from './Routes';

// HERE I AM RENDERING THE APP COMPONENT INSIDE THE DIV WITH THE ID ROOT AND ALL THE ITEMS WILL COME UNDER THIS DIV

ReactDOM.render(<Routes />, document.getElementById('root'));
