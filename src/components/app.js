import React, { Component } from 'react';
import NavBar from './NavBar.js';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import Footer from './Footer.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
            <div className="main">
                <NavBar />
                    <Switch>
                    <Route path="/signin" component={SignInForm}/>
                    <Route path="/signup" component={SignUpForm}/>
                    </Switch>
                <Footer />
            </div>
            </Router>
        );
    }
}

export default App;