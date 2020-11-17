import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import GameFrame from './GameFrame.js';
import SignOut from './SignOut.js';
import AddGame from './AddGame.js';
import Towers from './Towers.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import NavBar from './NavBar.js';
import Home from './Home';
import $ from 'jquery';

class App extends Component {

    componentDidMount(){
        $("input").on("click", function(){
            $("#sound").attr({ 
                'src':'media/point.mp3', 
                'autoplay':'autoplay'
            })
        })
    }
    render() {
        return (
            <Router>
            <div className="main">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/signin" component={SignIn}/>
                    <Route path="/signup" component={SignUp}/>
                    <Route path="/signout" component={SignOut}/>
                    <Route path="/frame" component={GameFrame}/>
                    <Route path="/addgame" component={AddGame}/>
                    <Route path="/towers" component={Towers}/>
                </Switch>
            </div>
            </Router>
        );
    }
}

export default App;
