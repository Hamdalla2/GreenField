import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Register, SignIn } from '../actions/actions.js';
const axios = require('axios');
const $ = require('jquery');
class RegisterForm extends Component {
     constructor(props) {
         super(props);
         this.state = {
             username: null,
             password: null,
             confirmpassword: null
         }
     }

    handleSubmit = (e) => {
        e.preventDefault();
        let input = $('#register-form').serializeArray();
        // console.log(input);
        if (input[1].value === input[2].value) {
            let options = {
                url: `http://localhost:3000/user/signup`,
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
        else {
            alert("Password don't match");
        }
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

    // handleChange = (e) => {
    //     setState({ [e.target.id]: e.target.value })

    // }

    onTrigger = () => {
            let x = "hide";
            this.props.changex(x);
    }

    render() {
        // console.log("here===>", this.props);
        return (
            <div id="register" className="center" style={{ display: this.props.register === "show" ? "" : "none" }}>
                <form id="register-form" onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <br/>
                    <div class="column">
                    <label htmlFor="username1">User Name:</label>
                    <input type="text" id="username1" name="username1" onChange={this.handleChange} /><br/>
                    <label htmlFor="Password1">Password:</label>
                    <input type="password" id="password1" name="password1" onChange={this.handleChange} /><br/>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div class="column">
                    <button id="submit1">Register</button><br/>
                    <button id="Cancel" onClick={this.onTrigger}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        test: state.test,
        register: state.register,
        SignIn: state.signIn

    }
}


export default connect(mapStateToProps)(RegisterForm);