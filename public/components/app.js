import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import rootReducer from '../reducers/rootReducer.js';
// import RegisterForm from './RegisterForm.jsx';
import NavBar from './NavBar.jsx';
import GameView from './GameView.jsx';
import GameList from './GameList.jsx';
import Footer from './Footer.jsx';

const store = createStore(rootReducer);

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <NavBar />
                <GameView />
                <GameList />
                <Footer />
                {/* <RegisterForm /> */}
            </div>
        );
    }
}