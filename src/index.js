import React from 'react';
import ReactDOM from 'react-dom';
import App from '../componenets/app.js';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));