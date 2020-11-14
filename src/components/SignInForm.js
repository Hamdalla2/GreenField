import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignIn } from '../actions/actions.js';
const axios = require('axios');
const $ = require('jquery');
class SignInForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             username: null,
             password: null
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#signIn-form').serializeArray();
        let options = {
            url: `http://localhost:4000/user/login`,
            method: 'post',
            data: { username: input[0].value, password: input[1].value }
        }

        axios(options)
            .then((results) => {
                console.log(results);
                // this.getData();       // what is the received data will be ?
            })

            .catch((err) => {
                console.log("error here ====>", err);
            })


    }

    // getData = () => {
    //     let options = {
    //         url: `http://localhost:3000/`,
    //         method: 'get',
    //     }

    //     axios(options)
    //         .then((results) => {
    //             console.log(results);

    //         })

    //         .catch((err) => {
    //             console.log("error here ====>", err);
    //         })

    // }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onTrigger = () => {
        let y = "hide";
        this.props.changey(y);
    }

    render() {
        return (
            <div id="signIn" className="center" style={{ display: this.props.SignIn === "show" ? "" : "none" }}>
                <form id="signIn-form" onSubmit={this.handleSubmit}>
                    <h1>Sign In</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" name="username" onChange={this.handleChange} /><br/>
                    <label htmlFor="Password">Password:</label>
                    <input type="password" id="password" name="password" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div className="column">
                    <button id="submit">Sign In</button><br/>
                    <button id="Cancel" onClick={this.onTrigger}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        SignIn: state.SignIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changey: (y) => { dispatch(SignIn(y)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInForm);