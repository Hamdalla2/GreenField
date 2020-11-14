import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm.js';
import RegisterForm from './RegisterForm.js';
import { Register, SignIn, showMenu } from '../actions/actions.js';

class NavBar extends Component {
    
    onTrigger1 = () => {
        let x = "show";
        let y = "hide"
        if (this.props.register === "hide") {
            this.props.changex(x);
            this.props.changey(y);
        }
        else {
            this.props.changex(y);
        }
    }

    onTrigger = () => {
        let x = "show"
        let y = "hide";
        if (this.props.SignIn === "hide") {
            this.props.changey(x);
            this.props.changex(y);
        }
        else {
            this.props.changey(y);
        }
    }
    handleClick = () => {
        let z = "show";
        if (this.props.showMenu === "hide") {
            this.props.menu(z);
        }
        else {
            z = "hide";
            this.props.menu(z);
        }
    }

    render() {
        return (
            <div className="menu" >
                <img id="openmenu" className="arrow" alt="" src="../media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>
                <nav id="img-logo" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                    <img id="openmenu" className="arrow" alt="" src="../media/leftarrow.png" onClick={this.handleClick}></img>
                    <input type="image" className="navitem" alt="" src="../media/search.png" onClick=""></input>
                    <input type="image" className="navitem" alt="" src="../media/house.png" href="http://127.0.0.1:3000/"></input>
                    <input type="image" className="navitem" alt="" src="../media/signin.png" onClick={this.onTrigger}></input>
                    <input type="image" className="navitem" alt="" src="../media/signup.png" onClick={this.onTrigger1}></input>
                    <input type="image" className="navitem" alt="" src="../media/cog.png" onClick=""></input>
                </nav>
                <RegisterForm />
                <SignInForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test,
        register: state.register,
        SignIn: state.SignIn,
        showMenu: state.showMenu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changex: (x) => { dispatch(Register(x)) },
        changey: (y) => { dispatch(SignIn(y)) },
        menu: (z) => { dispatch(showMenu(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
