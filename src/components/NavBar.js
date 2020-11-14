import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';
import { SignUp, SignIn, showMenu } from '../actions/actions.js';

class NavBar extends Component {
    
    SignUpButton = () => {
        let x = "show";
        let y = "hide"
        if (this.props.SignUp === "hide") {
            this.props.changex(x);
            this.props.changey(y);
        }
        else {
            this.props.changex(y);
        }
    }

    SignInButton = () => {
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
        if (this.props.showMenu === "hide") {
            this.props.menu("show");
        }
        else {
            this.props.menu("hide");
        }
    }

    render() {
        return (
            <div className="menu" >
                <img id="openmenu" className="arrow" alt="" src="./media/rightarrow.png" onClick={this.handleClick} style={{ display: this.props.showMenu === "show" ? "none" : "" }}></img>
                <nav id="img-logo" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                    <img id="openmenu" className="arrow" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>
                    <input type="image" className="navitem" alt="" src="./media/search.png"></input>
                    <input type="image" className="navitem" alt="" src="./media/house.png" href="http://127.0.0.1:3000/"></input>
                    <input type="image" className="navitem" alt="" src="./media/signin.png" onClick={this.SignInButton}></input>
                    <input type="image" className="navitem" alt="" src="./media/signup.png" onClick={this.SignUpButton}></input>
                    <input type="image" className="navitem" alt="" src="./media/cog.png"></input>
                </nav>
                <SignUpForm />
                <SignInForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SignUp: state.SignUp,
        SignIn: state.SignIn,
        showMenu: state.showMenu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changex: (x) => { dispatch(SignUp(x)) },
        changey: (y) => { dispatch(SignIn(y)) },
        menu: (z) => { dispatch(showMenu(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
