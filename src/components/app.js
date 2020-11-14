import React, { Component } from 'react';
import NavBar from './NavBar.js';
import GameView from './GameView.js';
import GameList from './GameList.js';
import Footer from './Footer.js';

class App extends Component {

    render() {
        return (
            <div className="main">
                <NavBar />
                <GameView />
                <GameList />
                <Footer />
            </div>
        );
    }
}

export default App;