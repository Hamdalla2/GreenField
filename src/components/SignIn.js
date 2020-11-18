import React, { Component } from 'react';
import { showSign } from '../actions/actions.js';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
const axios = require('axios');
const $ = require('jquery');
class SignIn extends Component {
     constructor(props) {
         super(props);
         this.state = {
             redirect: false
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signin-form').serializeArray();
        console.log(input)
        let options = {
            url: `http://localhost:3000/user/signin`,
            method: 'post',
            data: { username: input[0].value, password: input[1].value }
        }

        axios(options)
            .then((results) => {
                if(results.status === 200){
                    this.props.sign(1);
                    // localStorage.setItem('gamesio', results.data);
                    // this.setState({})
                    this.setState({ redirect: true })
                };
            })
            .catch((err) => {
                console.error(err);
                alert('incorrect username or password')
            })
    }

    render() {
        // if (localStorage.getItem('gamesio')) {
        if (this.state.redirect) {
            return <Redirect to="/"/>
        } else {
            return (
                <div id="signin" className="center styled">
                    <form id="signin-form" onSubmit={this.handleSubmit}>
                        <h1>Sign In</h1>
                        <br />
                        <div className="column">
                            <label htmlFor="username">User Name:</label>
                            <input type="text" className="text" id="username" name="username" />

                            <label htmlFor="Password">Password:</label>
                            <input type="password" className="text" id="password" name="password" />
                        </div>
                        <br />
                        <button className="button">Sign In</button><br />
                    </form>
                    <Link to="/reset" style={{textDecoration: "none"}}>
                        <a href="http://localhost:3000/reset"><p>Forgot password?</p></a>
                    </Link>
                </div>
            )
        }   
    }
};

const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu,
        showSearch: state.showSearch,
        showSign: state.showSign
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sign: (z) => { dispatch(showSign(z)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
