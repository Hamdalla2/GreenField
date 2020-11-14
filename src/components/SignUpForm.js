import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUp } from '../actions/actions.js';
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
        return (
            <div id="signup" className="center" style={{ display: this.props.SignUp === "show" ? "" : "none" }}>
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
                    <button id="Cancel1" onClick={this.onTrigger}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        SignUp: state.SignUp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changex: (x) => { dispatch(SignUp(x)) },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);