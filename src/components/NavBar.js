import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showMenu } from '../actions/actions.js';


class NavBar extends Component {
    
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
                <nav id="img-logo" className="row" style={{ display: this.props.showMenu === "show" ? "" : "none" }} >
                    <img id="openmenu" className="arrow" alt="" src="./media/leftarrow.png" onClick={this.handleClick}></img>
                    <input type="image" className="navitem" alt="Search" src="./media/search.png"></input>
                    <Link to="/">
                    <input type="image" className="navitem" alt="Home" src="./media/house.png"></input>
                    </Link ><Link to="/signin">
                    <input type="image" className="navitem" alt="SignIn" src="./media/signin.png"></input>
                    </Link><Link to="/signup">
                    <input type="image" className="navitem" alt="SignUp" src="./media/signup.png"></input>
                    </Link><Link to="/settings">
                    <input type="image" className="navitem" alt="Settings" src="./media/cog.png"></input>
                    </Link>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showMenu: state.showMenu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        menu: (z) => { dispatch(showMenu(z)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
