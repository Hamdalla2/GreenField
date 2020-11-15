import React, { Component } from 'react';
const axios = require('axios');
const $ = require('jquery');
class SignUpForm extends Component {
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
        let input = $('#signup-form').serializeArray();
        if (input[1].value === input[2].value) {
            let options = {
                url: `http://localhost:4000/user/signup`,
                method: 'post',
                data: { username: input[0].value, password: input[1].value }
            }

            axios(options)
                .then((results) => {
                    console.log(results);
                })

                .catch((err) => {
                    console.log("error here ====>", err);
                })
        }
        else {
            alert("Password don't match");
        }
    }

    render() {
        return (
            <div id="signup" className="center">
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <br/>
                    <div className="column">
                    <label htmlFor="username1">User Name:</label>
                    <input type="text" id="username1" name="username1" onChange={this.handleChange} /><br/>
                    <label htmlFor="Password1">Password:</label>
                    <input type="password" id="password1" name="password1" onChange={this.handleChange} /><br/>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div className="column">
                    <button id="submit1">Sign Up</button><br/>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignUpForm;