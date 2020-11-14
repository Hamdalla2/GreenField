import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer.js';
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));